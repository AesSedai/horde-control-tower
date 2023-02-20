import { Box, Divider, Drawer, Toolbar } from "@mui/material"
import { setSidebarOpen } from "../redux/slices/localState"
import { useAppDispatch, useAppSelector } from "../redux/store/hooks"
import { HordeStatus } from "./hordeStatus"
import { Performance } from "./performance"

const drawerWidth = 240

export const Sidebar = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const sidebarOpen = useAppSelector((state) => state.localState.sidebarOpen)

    const handleDrawerToggle = () => {
        dispatch(setSidebarOpen(!sidebarOpen))
    }

    return (
        <>
            <Drawer
                variant="temporary"
                open={sidebarOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
                }}>
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <Performance />
                    <Divider />
                    <HordeStatus />
                </Box>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", md: "block" },
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" }
                }}>
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <Performance />
                    <Divider />
                    <HordeStatus />
                </Box>
            </Drawer>
        </>
    )
}

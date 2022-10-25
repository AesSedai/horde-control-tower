import { Box, Divider, Drawer, Toolbar } from "@mui/material"
import { HordeStatus } from "./hordeStatus"
import { Performance } from "./performance"

const drawerWidth = 240

export const Sidebar = (): JSX.Element => {
    return (
        <Drawer
            variant="permanent"
            sx={{
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
    )
}

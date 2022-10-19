import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getStatusPerformance } from "../services/stableHorde"
import { HordeStatus } from "./hordeStatus"
import { Performance } from "./performance"

const drawerWidth = 240

export const Sidebar = (): JSX.Element => {
    const { data, isLoading, error } = useQuery(["performance"], getStatusPerformance, { staleTime: 1000 * 61 })

    if (isLoading) {
        return <Typography variant="h6">Loading Horde status ...</Typography>
    }

    if (data == null || error) {
        console.log("Performance error", error)
        return <Typography variant="h6">Error loading Horde status</Typography>
    }

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

import { Box } from "@mui/material"
import { Navbar } from "./components/navbar"
import { Performance } from "./components/performance"

export const App = (): JSX.Element => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Navbar />
            <Box sx={{display: "flex"}}>
                <Performance />
                <Box sx={{display: "flex", flexGrow: 1}}></Box>
            </Box>
        </Box>
    )
}

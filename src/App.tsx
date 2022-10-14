import { Box, Grid } from "@mui/material"
import { BackgroundQueries } from "./components/background"
import { Navbar } from "./components/navbar"
import { Performance } from "./components/performance"
import { UserLookup } from "./components/user/userLookup"

export const App = (): JSX.Element => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <BackgroundQueries />
            <Navbar />
            <Grid container spacing={2} p={2}>
                <Grid item xs={2}>
                    <Performance />
                </Grid>
                <Grid item xs={5}>
                    <UserLookup />
                </Grid>
            </Grid>
        </Box>
    )
}

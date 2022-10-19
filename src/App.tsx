import { Box, Grid, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { isEmpty } from "radash"
import { useEffect } from "react"
import { BackgroundQueries } from "./components/background"
import { Navbar } from "./components/navbar"
import { Sidebar } from "./components/sidebar"
import { UserLookup } from "./components/user/userLookup"
import { getFindUser } from "./services/stableHorde"
import { useAppSelector } from "./store/hooks"

export const App = (): JSX.Element => {
    const apiKey = useAppSelector((state) => state.persist.apikey)
    const { data, refetch } = useQuery(["findUser"], () => getFindUser(apiKey), { enabled: !isEmpty(apiKey) })

    useEffect(() => {
        refetch()
    }, [apiKey])

    if (isEmpty(apiKey) || data == null) {
        return (
            <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
                <Navbar />
                <Box sx={{ display: "flex", flex: "1 1 auto" }} justifyContent="center" alignItems="center">
                    <Typography variant="h4">Please enter your API key above.</Typography>
                </Box>
            </Box>
        )
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <BackgroundQueries />
            <Navbar />
            <Box display="flex">
                <Sidebar />
                <Grid container spacing={2} p={2}>
                    <Grid item xs={3}>
                        <UserLookup />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

import { Box, CircularProgress, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { isEmpty } from "lodash-es"
import { useEffect } from "react"
import { BackgroundQueries } from "./components/background"
import { Layout } from "./components/layout"
import { Navbar } from "./components/navbar"
import { useAppSelector } from "./components/redux/store/hooks"
import { ApiInput } from "./components/utilities/apiInput"
import { getFindUser } from "./services/stableHorde"

export const App = (): JSX.Element => {
    const apiKey = useAppSelector((state) => state.persist.apikey)
    const { data, refetch, isLoading } = useQuery(["findUser"], () => getFindUser(apiKey), {
        enabled: !isEmpty(apiKey),
        retry: 1
    })

    useEffect(() => {
        refetch()
    }, [apiKey])

    if (isLoading) {
        return (
            <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
                <Navbar />
                <Box sx={{ display: "flex", flex: "1 1 auto" }} justifyContent="center" alignItems="center">
                    <CircularProgress />
                </Box>
            </Box>
        )
    }

    if (isEmpty(apiKey) || data == null) {
        return (
            <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
                <Navbar />
                <Box display="flex" flex="1 1 auto" flexDirection="column" justifyContent="center" alignItems="center">
                    <Typography variant="h4">Please enter your API key.</Typography>
                    <ApiInput />
                </Box>
            </Box>
        )
    }

    if (!data.moderator) {
        return (
            <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
                <Navbar />
                <Box sx={{ display: "flex", flex: "1 1 auto" }} justifyContent="center" alignItems="center">
                    <Typography variant="h4">
                        Sorry, you really need to be a moderator to access these utilities :(
                    </Typography>
                </Box>
            </Box>
        )
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <BackgroundQueries />
            <Navbar />
            <Layout />
        </Box>
    )
}

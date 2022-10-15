import { Paper, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getStatusPerformance } from "../services/stableHorde"

export const Performance = (): JSX.Element => {
    const { data, isLoading, error } = useQuery(["performance"], getStatusPerformance, { staleTime: 1000 * 61 })

    if (isLoading) {
        return <Typography variant="h6">Loading Horde status ...</Typography>
    }

    if (data == null || error) {
        console.log("Performance error", error)
        return <Typography variant="h6">Error loading Horde status</Typography>
    }

    return (
        <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6">Queued Requests: {data.queued_requests}</Typography>
            <Typography variant="h6">Queued MPS: {data.queued_megapixelsteps}</Typography>
            <Typography variant="h6">Past Minute MPS: {data.past_minute_megapixelsteps}</Typography>
            <Typography variant="h6">Workers: {data.worker_count}</Typography>
        </Paper>
    )
}

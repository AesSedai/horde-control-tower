import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getStatusPerformance } from "../../services/stableHorde"

export const Performance = (): JSX.Element => {
    const { data, isLoading, error } = useQuery(["performance"], getStatusPerformance)

    if (isLoading) {
        return <Typography variant="h6">Loading Horde status ...</Typography>
    }

    if (data == null || error) {
        return <Typography variant="h6">Error loading Horde status</Typography>
    }

    return (
        <List>
            <ListItem>
                <ListItemText primary={`Queued Requests: ${data.queued_requests}`} />
            </ListItem>
            <ListItem>
                <ListItemText primary={`Queued MPS: ${data.queued_megapixelsteps}`} />
            </ListItem>
            <ListItem>
                <ListItemText primary={`Past Minute MPS: ${data.past_minute_megapixelsteps}`} />
            </ListItem>
            <ListItem>
                <ListItemText primary={`Workers: ${data.worker_count}`} />
            </ListItem>
        </List>
    )
}

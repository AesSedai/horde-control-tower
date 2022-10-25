import { Grid, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getUser, userKeys } from "../../services/stableHorde"
import { WorkerWrapper } from "./workerWrapper"

interface Props {
    userId: number
}

export const WorkerBox = (props: Props): JSX.Element => {
    const { userId } = props

    const { data } = useQuery(userKeys.detail(userId), () => getUser(userId))

    if (data == null) {
        return <></>
    }

    if (data.worker_ids.length === 0) {
        return (
            <Grid item xs={3}>
                <Typography variant="body1">This user has no workers.</Typography>
            </Grid>
        )
    }

    return (
        <>
            {data.worker_ids.map((workerId) => (
                <Grid item xs={3} key={workerId}>
                    <WorkerWrapper workerId={workerId} />
                </Grid>
            ))}
        </>
    )
}

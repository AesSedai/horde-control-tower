import { Grid, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getUser, userKeys } from "../../../../services/stableHorde"
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
            <Grid item md={12} lg={6} xl={4}>
                <Typography variant="body1">This user has no workers.</Typography>
            </Grid>
        )
    }

    return (
        <>
            {data.worker_ids.map((workerId) => (
                <WorkerWrapper key={workerId} workerId={workerId} />
            ))}
        </>
    )
}

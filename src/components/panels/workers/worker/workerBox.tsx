import { Grid, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getUser, userKeys } from "../../../../services/aiHorde"
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

    const workerIds = data.worker_ids

    if (workerIds == null || workerIds?.length === 0) {
        return (
            <Grid item md={12} lg={6} xl={4}>
                <Typography variant="body1">This user has no workers.</Typography>
            </Grid>
        )
    }

    return (
        <>
            {workerIds.map((workerId) => (
                <WorkerWrapper key={workerId} workerId={workerId} />
            ))}
        </>
    )
}

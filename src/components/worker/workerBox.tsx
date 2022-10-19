import { Box, Divider, Typography } from "@mui/material"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getUser, userKeys } from "../../services/stableHorde"
import { WorkerWrapper } from "./workerWrapper"

interface Props {
    userId: number
}

export const WorkerBox = (props: Props): JSX.Element => {
    const { userId } = props
    const queryClient = useQueryClient()

    const { data } = useQuery(userKeys.detail(userId), () => getUser(userId), { staleTime: 1000 * 61 })

    console.log("WorkerBox data query", data)

    if (data == null) {
        return <></>
    }

    if (data.worker_ids.length === 0) {
        return <Typography variant="body1">This user has no workers.</Typography>
    }

    return (
        <>
            {data.worker_ids.map((workerId) => (
                <Box key={workerId}>
                    <WorkerWrapper key={workerId} workerId={workerId} />
                    <Divider />
                </Box>
            ))}
        </>
    )
}

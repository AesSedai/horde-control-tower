import { Grid } from "@mui/material"
import { useAppSelector } from "../redux/store/hooks"
import { UserLookup } from "../user/userLookup"
import { WorkerBox } from "../worker/workerBox"

export const UserPanel = (): JSX.Element => {
    const userId = useAppSelector((state) => state.userPanel.selectedUser)

    return (
        <Grid container spacing={2}>
            <Grid item md={12} lg={6} xl={4}>
                <UserLookup />
            </Grid>
            {userId != null ? <WorkerBox userId={userId}></WorkerBox> : null}
        </Grid>
    )
}

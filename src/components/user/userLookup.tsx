import { Box, Grid, Paper } from "@mui/material"
import { useAppSelector } from "../../store/hooks"
import { UserAutocomplete } from "./userAutocomplete"
import { UserWrapper } from "./userWrapper"
import { WorkerBox } from "./workerBox"

export const UserLookup = (): JSX.Element => {
    const userId = useAppSelector((state) => state.localState.selectedUser)

    return (
        <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
            <Box display="flex" alignItems="baseline">
                <UserAutocomplete />
            </Box>
            <Box display="flex">
                <Grid container spacing={2} pt={1}>
                    <Grid item xs={6}>
                        {userId != null ? <UserWrapper userId={userId} /> : null}
                    </Grid>
                    <Grid item xs={6}>
                        {userId != null ? <WorkerBox userId={userId} /> : null}
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

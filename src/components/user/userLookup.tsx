import { Box, Grid, Paper } from "@mui/material"
import { UserAutocomplete } from "./userAutocomplete"
import { UserTable } from "./userTable"

export const UserLookup = (): JSX.Element => {
    return (
        <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
            <Box display="flex" alignItems="baseline">
                <UserAutocomplete />
            </Box>
            <Box display="flex">
                <Grid container spacing={2} pt={1}>
                    <Grid item xs={6}>
                        <UserTable />
                    </Grid>
                    <Grid item xs={6}>
                        Pending
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

import { Grid, Paper } from "@mui/material"
import { ApiInput } from "./apiInput"

export const SettingsPanel = (): JSX.Element => {
    return (
        <Grid container spacing={2}>
            <Grid item md={12} lg={6} xl={4}>
                <Paper>
                    <ApiInput />
                </Paper>
            </Grid>
        </Grid>
    )
}

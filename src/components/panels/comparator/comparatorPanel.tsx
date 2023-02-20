import { Grid, Paper, Typography } from "@mui/material"
import { GenForm } from "./genForm"
import { WorkerModelSelector } from "./workerModelSelector"

export const ComparatorPanel = (): JSX.Element => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} xl={4}>
                <Paper sx={{ p: 2 }}>
                    <Typography align="center" variant="h4" sx={{ pb: 1 }}>
                        Generation Settings
                    </Typography>
                    <WorkerModelSelector />
                    <GenForm />
                </Paper>
            </Grid>

            <Grid item xs={12} xl={8}>
                <Paper sx={{ p: 2, height: "100%" }}>
                    <Typography align="center" variant="h4" sx={{ pb: 1 }}>
                        Output
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

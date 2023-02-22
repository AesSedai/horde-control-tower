import { Box, Grid, Paper, Typography } from "@mui/material"
import { GenerateMenu } from "./generateMenu"
import { GenerateOutput } from "./generateOutput"
import { GenForm } from "./genForm"
import { WorkerModelSelector } from "./workerModelSelector"

export const ComparatorPanel = (): JSX.Element => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} xl={4}>
                <Paper sx={{ p: 2 }}>
                    <Box sx={{ position: "relative" }}>
                        <Typography align="center" variant="h4" sx={{ pb: 1 }}>
                            Generation Settings
                        </Typography>
                        <Box sx={{ position: "absolute", top: 0, right: 0 }}>
                            <GenerateMenu />
                        </Box>
                    </Box>
                    <WorkerModelSelector />
                    <GenForm />
                </Paper>
            </Grid>

            <Grid item xs={12} xl={8}>
                <Paper sx={{ p: 2, height: "100%" }}>
                    <Typography align="center" variant="h4" sx={{ pb: 1 }}>
                        Output
                    </Typography>
                    <GenerateOutput />
                </Paper>
            </Grid>
        </Grid>
    )
}

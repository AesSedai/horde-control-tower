import { Grid } from "@mui/material"
import { PromptCheck } from "./promptCheck"

export const UtilitiesPanel = (): JSX.Element => {
    return (
        <Grid container spacing={2}>
            <Grid item md={12} lg={6} xl={4}>
                <PromptCheck />
            </Grid>
        </Grid>
    )
}

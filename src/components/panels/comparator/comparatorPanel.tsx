import { Paper } from "@mui/material"
import { GenForm } from "./genForm"
import { WorkerModelSelector } from "./workerModelSelector"

export const ComparatorPanel = (): JSX.Element => {
    return (
        <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
            <WorkerModelSelector />
            <GenForm />
        </Paper>
    )
}

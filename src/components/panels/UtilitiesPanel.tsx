import { Grid } from "@mui/material"
import { useAppSelector } from "../../store/hooks"
import { PromptCheck } from "../utilities/PromptCheck"

export const UtilitiesPanel = (): JSX.Element => {
    const userId = useAppSelector((state) => state.localState.selectedUser)

    return (
        <Grid container spacing={2}>
            <Grid item md={12} lg={6} xl={4}>
                <PromptCheck />
            </Grid>
        </Grid>
    )
}

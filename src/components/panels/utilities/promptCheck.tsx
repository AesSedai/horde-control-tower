import { LoadingButton } from "@mui/lab"
import { Box, Paper, TextField, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { isEmpty } from "lodash-es"
import { postFilters } from "../../../services/stableHorde"
import { setPrompt } from "../../redux/slices/utilityPanelState"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"

export const PromptCheck = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const prompt = useAppSelector((state) => state.utilityPanel.prompt)

    const { data, refetch, isFetching } = useQuery(
        ["promptCheck", prompt],
        () => postFilters({ filter_type: 0, prompt: prompt }),
        {
            enabled: false
        }
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPrompt(event.target.value))
    }

    return (
        <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
            <Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">Prompt Checker</Typography>

                    <LoadingButton
                        onClick={() => {
                            if (!isEmpty(prompt)) {
                                refetch()
                            }
                        }}
                        loading={isFetching}
                        variant="contained">
                        Submit
                    </LoadingButton>
                </Box>
                <TextField
                    sx={{ my: 2 }}
                    variant="standard"
                    multiline
                    fullWidth
                    value={prompt}
                    onChange={handleChange}
                    placeholder="Enter prompt"
                />
                {data != null ? (
                    <Box pt={2}>
                        <Typography variant="body1">Suspicion: {data.suspicion}</Typography>
                        {data.suspicion > 0 ? (
                            <Typography variant="body1">Matches: {JSON.stringify(data.matches)}</Typography>
                        ) : null}
                    </Box>
                ) : null}
            </Box>
        </Paper>
    )
}

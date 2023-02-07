import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { isEmpty } from "lodash-es"
import { useState } from "react"
import { postFilters } from "../../services/stableHorde"

export const PromptCheck = (): JSX.Element => {
    const [value, setValue] = useState("")

    const { data, refetch } = useQuery(["promptCheck", value], () => postFilters({ filter_type: 0, prompt: value }), {
        enabled: false
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSubmit = () => {
        if (!isEmpty(value)) {
            refetch()
        }
    }

    return (
        <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
            <Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">Prompt Checker</Typography>
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
                <TextField
                    variant="standard"
                    multiline
                    fullWidth
                    value={value}
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

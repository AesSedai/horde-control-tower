import { LoadingButton } from "@mui/lab"
import { Box, Paper, TextField, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { isEmpty } from "lodash-es"
import { deleteIpAddr } from "../../../services/stableHorde"
import { DeleteIpAddrError, DeleteIpAddrResponse } from "../../../types/stableHorde/deleteIpAddr"
import { setIpAddr } from "../../redux/slices/utilityPanelState"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"

export const DeleteIpAddr = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const ipAddr = useAppSelector((state) => state.utilityPanel.ipAddr)

    const { data, refetch, isFetching } = useQuery<
        DeleteIpAddrResponse,
        DeleteIpAddrError,
        DeleteIpAddrResponse,
        string[]
    >(["deleteIpAddr", ipAddr], () => deleteIpAddr({ ipaddr: ipAddr }), {
        enabled: false,
        // this is a DELETE request, so don't cache it
        cacheTime: 0
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setIpAddr(event.target.value))
    }

    return (
        <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
            <Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">Clear IP Timeout</Typography>

                    <LoadingButton
                        onClick={() => {
                            if (!isEmpty(ipAddr)) {
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
                    value={ipAddr}
                    onChange={handleChange}
                    placeholder="Enter IP"
                />
                {data != null ? (
                    <Box pt={2}>
                        <Typography variant="body1">Response: {data.message}</Typography>
                    </Box>
                ) : null}
            </Box>
        </Paper>
    )
}

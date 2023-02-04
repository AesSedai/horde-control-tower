import { LoadingButton } from "@mui/lab"
import {
    Box,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography
} from "@mui/material"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { useUserFormContext } from "../../context/userFormContext"
import { getUser, putUser, userKeys } from "../../services/stableHorde"
import { PutUser } from "../../types/stableHorde/putUser"

interface Props {
    userId: number
}

export const UserWrapper = (props: Props): JSX.Element => {
    const queryClient = useQueryClient()

    const { userId } = props
    const { data, isInitialLoading } = useQuery(userKeys.detail(userId), () => getUser(userId), { refetchInterval: 1000 * 15 })

    const mutation = useMutation<PutUser, unknown, { id: number; data: PutUser }, unknown>(
        (data) => {
            return putUser(data.id, data.data)
        },
        {
            onSuccess: (data, vars) => {
                queryClient.invalidateQueries({ queryKey: userKeys.detail(vars.id) })
            }
        }
    )

    const form = useUserFormContext()

    useEffect(() => {
        if (data != null) {
            const toSet = {
                trusted: data.trusted,
                flagged: data.flagged,
                worker_invite: data.worker_invited.toString()
            }
            form.setValues(toSet)
            form.resetDirty(toSet)
        }
    }, [isInitialLoading])

    if (data == null) {
        return <></>
    }

    return (
        <TableContainer component={Box}>
            <Table size="small">
                <TableBody>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <Typography variant="body1">Username</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="body1">
                                {data.username} {data.moderator ? "(moderator)" : ""}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <Typography variant="body1">Trusted</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Switch {...form.getInputProps("trusted", { type: "checkbox" })} size="small" />
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <Typography variant="body1">Flagged</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Switch {...form.getInputProps("flagged", { type: "checkbox" })} size="small" />
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <Typography variant="body1">Worker Invites</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <TextField
                                variant="standard"
                                type="number"
                                {...form.getInputProps("worker_invite")}
                                sx={{ maxWidth: "100px" }}
                                InputProps={{
                                    inputProps: {
                                        min: 0
                                    },
                                    sx: {
                                        "& input": {
                                            p: "0",
                                            textAlign: "right"
                                        }
                                    }
                                }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <Typography variant="body1">Worker Count</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="body1">{data.worker_count}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <Typography variant="body1">Kudos</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="body1">{data.kudos}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <Typography variant="body1">Suspicious</Typography>
                        </TableCell>
                        <TableCell
                            sx={{
                                display: "flex",
                                flex: "1 1 0",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                flexDirection: "row"
                            }}>
                            {data.suspicious > 0 ? (
                                <LoadingButton
                                    onClick={async () => {
                                        const data: PutUser = {
                                            reset_suspicion: true
                                        }
                                        mutation.mutate({ id: userId, data: data })
                                    }}
                                    loading={mutation.isLoading}
                                    variant="contained"
                                    color="error"
                                    sx={{ order: 0, mr: 4 }}>
                                    Reset
                                </LoadingButton>
                            ) : null}
                            <Typography sx={{ order: 1 }} variant="body1">
                                {data.suspicious}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

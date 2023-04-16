import { LoadingButton } from "@mui/lab"
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogTitle,
    Snackbar,
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
import { useEffect, useState } from "react"
import { useUserFormContext } from "../../../../context/userFormContext"
import { getUser, putUser, userKeys } from "../../../../services/aiHorde"
import { postUserFlagRatings } from "../../../../services/ratings"
import { PutUserRequest } from "../../../../types/stableHorde/api"
import { useAppSelector } from "../../../redux/store/hooks"

type DialogTypes = "resetSuspicion" | "setFlagged"

export const UserWrapper = (): JSX.Element => {
    const userId = useAppSelector((state) => state.userPanel.selectedUser ?? -1)
    const queryClient = useQueryClient()
    const [dialogType, setDialogType] = useState<DialogTypes>("setFlagged")
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)

    const { data, isInitialLoading, isLoading } = useQuery(userKeys.detail(userId), () => getUser(userId), {
        refetchInterval: 1000 * 15
    })

    const updateUserMutation = useMutation<PutUserRequest, unknown, { id: number; data: PutUserRequest }, unknown>(
        (data) => {
            return putUser(data.id, data.data)
        },
        {
            onSuccess: (data, vars) => {
                queryClient.invalidateQueries({ queryKey: userKeys.detail(vars.id) })
            }
        }
    )

    const flagUserMutation = useMutation<{}, unknown, { id: number }, unknown>(
        (data) => {
            return postUserFlagRatings(data.id)
        },
        {}
        // {
        //     onSuccess: (data, vars) => {
        //         queryClient.invalidateQueries({ queryKey: userKeys.detail(vars.id) })
        //     }
        // }
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

    if (isLoading) {
        return (
            <Box py={4} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress />
            </Box>
        )
    }

    if (data == null) {
        return <></>
    }

    const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }

        setSnackbarOpen(false)
    }

    const getDialogContent = (type: DialogTypes): JSX.Element => {
        switch (type) {
            case "resetSuspicion":
                return (
                    <>
                        <DialogTitle>Reset "{data.username}" Suspicion</DialogTitle>
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    setDialogOpen(false)
                                }}>
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    const data: PutUserRequest = {
                                        reset_suspicion: true
                                    }
                                    updateUserMutation.mutate({ id: userId, data: data })
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
            case "setFlagged":
                return (
                    <>
                        <DialogTitle>Flag "{data.username}" ratings and delete?</DialogTitle>
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    setDialogOpen(false)
                                }}>
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    flagUserMutation.mutate({ id: userId })
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
        }
    }

    return (
        <>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                {getDialogContent(dialogType)}
            </Dialog>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    sx={{ width: "100%", border: "2px solid #a3a3a3" }}>
                    Changes successfully saved!
                </Alert>
            </Snackbar>

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
                                <Typography sx={{ order: 0 }} variant="body1">
                                    {data.suspicious}
                                </Typography>
                                {data.suspicious > 0 ? (
                                    <LoadingButton
                                        onClick={async () => {
                                            setDialogType("resetSuspicion")
                                            setDialogOpen(true)
                                        }}
                                        loading={updateUserMutation.isLoading}
                                        variant="contained"
                                        color="error"
                                        sx={{ ml: 4 }}>
                                        Reset
                                    </LoadingButton>
                                ) : null}
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                <Typography variant="body1">Flag User Ratings</Typography>
                            </TableCell>
                            <TableCell
                                sx={{
                                    display: "flex",
                                    flex: "1 1 0",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    flexDirection: "row"
                                }}>
                                <LoadingButton
                                    onClick={async () => {
                                        setDialogType("setFlagged")
                                        setDialogOpen(true)
                                    }}
                                    loading={flagUserMutation.isLoading}
                                    variant="contained"
                                    color="error"
                                    sx={{ order: 0 }}>
                                    Flag
                                </LoadingButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

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
import { getUserCheck, postUserFlagRatings, postUserModify, ratingKeys } from "../../../../services/ratings"
import { PostUserModifyPayload, PostUserModifyResponse } from "../../../../types/ratings/postUserModify"
import { PutUserRequest } from "../../../../types/stableHorde/api"
import { useAppSelector } from "../../../redux/store/hooks"

type DialogTypes = "resetSuspicion" | "setFlagged" | "setValidated" | "setUnvalidated" | "setVPN" | "unsetVPN"

export const UserWrapper = (): JSX.Element => {
    const userId = useAppSelector((state) => state.userPanel.selectedUser ?? -1)
    const queryClient = useQueryClient()
    const [dialogType, setDialogType] = useState<DialogTypes>("setFlagged")
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [ratingHasError, setRatingHasError] = useState(false)

    const userDetail = useQuery(userKeys.detail(userId), () => getUser(userId), {
        refetchInterval: 1000 * 15
    })

    const ratingCheck = useQuery(ratingKeys.check(userId), () => getUserCheck(userId), {
        enabled: !ratingHasError,
        onError: (error) => setRatingHasError(true),
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

    const flagUserMutation = useMutation<{}, unknown, { id: number }, unknown>((data) => {
        return postUserFlagRatings(data.id)
    }, {})

    const modifyUserMutation = useMutation<
        PostUserModifyResponse,
        unknown,
        { id: number; data: PostUserModifyPayload },
        unknown
    >(
        (data) => {
            return postUserModify(data.id, data.data)
        },
        {
            onSuccess: (data, vars) => {
                queryClient.invalidateQueries({ queryKey: ratingKeys.check(vars.id) })
            }
        }
    )

    const form = useUserFormContext()

    useEffect(() => {
        if (userDetail.data != null) {
            const toSet = {
                trusted: userDetail.data.trusted,
                flagged: userDetail.data.flagged,
                worker_invite: userDetail.data.worker_invited.toString()
            }
            form.setValues(toSet)
            form.resetDirty(toSet)
        }
    }, [userDetail.isInitialLoading])

    if (userDetail.isLoading) {
        return (
            <Box py={4} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress />
            </Box>
        )
    }

    if (userDetail.data == null) {
        return <></>
    }

    const ratingData = ratingCheck.data ?? null

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
                        <DialogTitle>Reset "{userDetail.data.username}" Suspicion</DialogTitle>
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
                        <DialogTitle>Flag "{userDetail.data.username}" ratings and delete?</DialogTitle>
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
            case "setValidated":
                return (
                    <>
                        <DialogTitle>Set "{userDetail.data.username}" ratings as validated</DialogTitle>
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    setDialogOpen(false)
                                }}>
                                Cancel
                            </Button>
                            <Button
                                onClick={async () => {
                                    const data: PostUserModifyPayload = {
                                        validated: true
                                    }
                                    await modifyUserMutation.mutate({ id: userId, data: data })
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
            case "setUnvalidated":
                return (
                    <>
                        <DialogTitle>Set "{userDetail.data.username}" ratings as unvalidated</DialogTitle>
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    setDialogOpen(false)
                                }}>
                                Cancel
                            </Button>
                            <Button
                                onClick={async () => {
                                    const data: PostUserModifyPayload = {
                                        validated: false
                                    }
                                    await modifyUserMutation.mutate({ id: userId, data: data })
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
            case "setVPN":
                return (
                    <>
                        <DialogTitle>Allow "{userDetail.data.username}" to use VPNs</DialogTitle>
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    setDialogOpen(false)
                                }}>
                                Cancel
                            </Button>
                            <Button
                                onClick={async () => {
                                    const data: PutUserRequest = {
                                        vpn: true
                                    }
                                    updateUserMutation.mutate({ id: userId, data: data })
                                    setSnackbarOpen(true)
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
            case "unsetVPN":
                return (
                    <>
                        <DialogTitle>Disallow "{userDetail.data.username}" to use VPNs</DialogTitle>
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    setDialogOpen(false)
                                }}>
                                Cancel
                            </Button>
                            <Button
                                onClick={async () => {
                                    const data: PutUserRequest = {
                                        vpn: false
                                    }
                                    updateUserMutation.mutate({ id: userId, data: data })
                                    setSnackbarOpen(true)
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
                                    {userDetail.data.username} {userDetail.data.moderator ? "(moderator)" : ""}
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
                                <Typography variant="body1">VPN Access</Typography>
                            </TableCell>
                            <TableCell align="right" sx={{ display: "flex", alignItems: "center" }}>
                                <LoadingButton
                                    onClick={async () => {
                                        setDialogType("setVPN")
                                        setDialogOpen(true)
                                    }}
                                    loading={modifyUserMutation.isLoading}
                                    variant="contained"
                                    color="success"
                                    sx={{ order: 1, ml: 4 }}>
                                    Enable VPN
                                </LoadingButton>
                                <LoadingButton
                                    onClick={async () => {
                                        setDialogType("unsetVPN")
                                        setDialogOpen(true)
                                    }}
                                    loading={modifyUserMutation.isLoading}
                                    variant="contained"
                                    color="error"
                                    sx={{ order: 0, ml: 4 }}>
                                    Disable VPN
                                </LoadingButton>
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
                                <Typography variant="body1">{userDetail.data.worker_count}</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                <Typography variant="body1">Kudos</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="body1">{userDetail.data.kudos}</Typography>
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
                                    {userDetail.data.suspicious}
                                </Typography>
                                {userDetail.data.suspicious > 0 ? (
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
                        {ratingData != null ? (
                            <>
                                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="body1">Ratings Validated</Typography>
                                    </TableCell>
                                    <TableCell align="right" sx={{ display: "flex", alignItems: "center" }}>
                                        <Typography sx={{ order: 1 }} variant="body1">
                                            {ratingData.validated ? "True" : "False"}
                                        </Typography>
                                        <LoadingButton
                                            onClick={async () => {
                                                if (ratingData.validated) {
                                                    setDialogType("setUnvalidated")
                                                } else {
                                                    setDialogType("setValidated")
                                                }
                                                setDialogOpen(true)
                                            }}
                                            loading={modifyUserMutation.isLoading}
                                            variant="contained"
                                            color={ratingData.validated ? "error" : "success"}
                                            sx={{ order: 0, ml: 4 }}>
                                            {ratingData.validated ? "Unvalidate" : "Validate"}
                                        </LoadingButton>
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
                            </>
                        ) : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

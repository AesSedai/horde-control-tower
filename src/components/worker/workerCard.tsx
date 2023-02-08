import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import DoNotDisturbOffIcon from "@mui/icons-material/DoNotDisturbOff"
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn"
import ErrorIcon from "@mui/icons-material/Error"
import FlagIcon from "@mui/icons-material/Flag"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import PauseIcon from "@mui/icons-material/Pause"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import {
    Alert,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Snackbar,
    TextField,
    Tooltip,
    Typography
} from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { isEmpty } from "lodash-es"
import { Duration } from "luxon"
import { useState } from "react"
import { putWorker, workerKeys } from "../../services/stableHorde"
import { GetWorker, PutWorker } from "../../types/stableHorde/api"
import { bad, badBackground, good, warnBackground } from "../../utils/colors"

interface Props {
    worker: GetWorker
}

type DialogTypes =
    | "setFlagged"
    | "unsetFlagged"
    | "setMaintenance"
    | "unsetMaintenance"
    | "setPaused"
    | "unsetPaused"
    | "listModels"

export const WorkerCard = (props: Props): JSX.Element => {
    const { worker } = props

    const queryClient = useQueryClient()
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dialogType, setDialogType] = useState<DialogTypes>("setFlagged")
    const [maintReason, setMaintReason] = useState("")

    const getCardBackground = (worker: GetWorker): string => {
        if (parseFloat(worker.performance) > 3.0) {
            return warnBackground
        }
        return worker.maintenance_mode || worker.paused || worker.flagged ? badBackground : "background.paper"
    }

    const mutation = useMutation<PutWorker, unknown, { id: string; data: PutWorker }, unknown>(
        (data) => {
            return putWorker(data.id, data.data)
        },
        {
            onSuccess: (data, vars) => {
                setSnackbarOpen(true)
                queryClient.invalidateQueries({ queryKey: workerKeys.detail(vars.id) })
                queryClient.invalidateQueries({ queryKey: workerKeys.all })
            }
        }
    )

    const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }

        setSnackbarOpen(false)
    }

    const getDialogContent = (type: DialogTypes): JSX.Element => {
        switch (type) {
            case "setFlagged":
                return (
                    <>
                        <DialogTitle>Set "{worker.name}" as Flagged</DialogTitle>
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    setDialogOpen(false)
                                }}>
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    // mutation.mutate({
                                    //     id: worker.id,
                                    //     data: {
                                    //         flagged: true
                                    //     }
                                    // })
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
            case "unsetFlagged":
                return (
                    <>
                        <DialogTitle>Unset "{worker.name}" as Flagged</DialogTitle>
                        <DialogActions>
                            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                            <Button
                                onClick={() => {
                                    // mutation.mutate({
                                    //     id: worker.id,
                                    //     data: {
                                    //         flagged: false
                                    //     }
                                    // })
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
            case "setMaintenance":
                return (
                    <>
                        <DialogTitle>Set "{worker.name}" Maintenance Mode</DialogTitle>
                        <DialogContent>
                            <TextField
                                value={maintReason}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setMaintReason(event.target.value)
                                }}
                                multiline
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Maintenance Reason (optional)"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                            <Button
                                onClick={() => {
                                    const data: PutWorker = {
                                        maintenance: true
                                    }
                                    if (!isEmpty(maintReason)) {
                                        data.maintenance_msg = maintReason
                                    }
                                    mutation.mutate({
                                        id: worker.id,
                                        data: data
                                    })
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
            case "unsetMaintenance":
                return (
                    <>
                        <DialogTitle>Unset "{worker.name}" Maintenance Mode</DialogTitle>
                        <DialogActions>
                            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                            <Button
                                onClick={() => {
                                    mutation.mutate({
                                        id: worker.id,
                                        data: {
                                            maintenance: false,
                                            maintenance_msg: ""
                                        }
                                    })
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
            case "setPaused":
                return (
                    <>
                        <DialogTitle>Set "{worker.name}" Paused Mode</DialogTitle>
                        <DialogActions>
                            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                            <Button
                                onClick={() => {
                                    mutation.mutate({
                                        id: worker.id,
                                        data: {
                                            paused: true
                                        }
                                    })
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
            case "unsetPaused":
                return (
                    <>
                        <DialogTitle>Unset "{worker.name}" Paused Mode</DialogTitle>
                        <DialogActions>
                            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                            <Button
                                onClick={() => {
                                    mutation.mutate({
                                        id: worker.id,
                                        data: {
                                            paused: false
                                        }
                                    })
                                    setDialogOpen(false)
                                }}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                )
            case "listModels":
                return (
                    <>
                        <DialogTitle>"{worker.name}" Models</DialogTitle>
                        <DialogContent>
                            <Typography variant="body1">{worker.models.sort().join(", ")}</Typography>
                        </DialogContent>
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

            <Grid item md={12} lg={6} xl={3} key={worker.id}>
                <Card sx={{ backgroundColor: getCardBackground(worker) }}>
                    <CardHeader
                        avatar={
                            worker.online && !worker.paused && !worker.maintenance_mode && !worker.flagged ? (
                                <Tooltip title="Worker Online">
                                    <CheckCircleIcon sx={{ color: good }} />
                                </Tooltip>
                            ) : (
                                <Tooltip title="Worker Issue">
                                    <ErrorIcon sx={{ color: bad }} />
                                </Tooltip>
                            )
                        }
                        action={
                            <Box>
                                {worker.paused ? (
                                    <Tooltip title="Worker Paused">
                                        <DoNotDisturbOnIcon sx={{ color: bad, mt: 0.5, mr: 1 }} />
                                    </Tooltip>
                                ) : null}

                                {worker.maintenance_mode ? (
                                    <Tooltip title="Worker Maintenance">
                                        <PauseIcon sx={{ color: bad, mt: 0.5, mr: 1 }} />
                                    </Tooltip>
                                ) : null}

                                {worker.flagged ? (
                                    <Tooltip title="User Flagged">
                                        <FlagIcon sx={{ color: bad, mt: 0.5, mr: 1 }} />
                                    </Tooltip>
                                ) : null}

                                {worker.trusted ? (
                                    <Tooltip title="Trusted Worker">
                                        <VerifiedUserIcon sx={{ color: good, mt: 0.5, mr: 1 }} />
                                    </Tooltip>
                                ) : null}
                            </Box>
                        }
                        title={<Typography variant="h5">{worker.name}</Typography>}
                        subheader={worker.id}
                    />
                    <CardContent>
                        <Typography variant="body2">
                            Uptime: {Duration.fromObject({ seconds: worker.uptime }).toHuman()}
                        </Typography>
                        <Typography variant="body2">Models Loaded: {worker.models.length}</Typography>
                        <Typography variant="body2">MPS Generated: {worker.megapixelsteps_generated}</Typography>
                        <Typography variant="body2">Speed: {worker.performance} MPS</Typography>
                        <Typography variant="body2">Threads: {worker.threads}</Typography>
                        <Typography variant="body2">Requests Fulfilled: {worker.requests_fulfilled}</Typography>
                        <Typography variant="body2">NSFW: {worker.nsfw ? "true" : "false"}</Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Tooltip title="Show Worker Models">
                            <IconButton
                                onClick={() => {
                                    setDialogType("listModels")
                                    setDialogOpen(true)
                                }}>
                                <FormatListNumberedIcon />
                            </IconButton>
                        </Tooltip>

                        {/* {worker.flagged ? (
                            <IconButton
                                onClick={() => {
                                    setDialogType("unsetFlagged")
                                    setDialogOpen(true)
                                }}>
                                <FlagIcon />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    setDialogType("setFlagged")
                                    setDialogOpen(true)
                                }}>
                                <FlagIcon />
                            </IconButton>
                        )} */}

                        {worker.maintenance_mode ? (
                            <Tooltip title="Unset Worker Maintenance">
                                <IconButton
                                    onClick={() => {
                                        setDialogType("unsetMaintenance")
                                        setDialogOpen(true)
                                    }}>
                                    <PlayArrowIcon />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <Tooltip title="Set Worker Maintenance">
                                <IconButton
                                    onClick={() => {
                                        setDialogType("setMaintenance")
                                        setDialogOpen(true)
                                    }}>
                                    <PauseIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                        {worker.paused ? (
                            <Tooltip title="Unset Worker Pause">
                                <IconButton
                                    onClick={() => {
                                        setDialogType("unsetPaused")
                                        setDialogOpen(true)
                                    }}>
                                    <DoNotDisturbOffIcon />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <Tooltip title="Set Worker Pause">
                                <IconButton
                                    onClick={() => {
                                        setDialogType("setPaused")
                                        setDialogOpen(true)
                                    }}>
                                    <DoNotDisturbOnIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

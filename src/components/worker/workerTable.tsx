import {
    Box,
    Button,
    Paper,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { isEmpty } from "radash"
import { useWorkerForm } from "../../context/workerFormContext"
import { putWorker, workerKeys } from "../../services/stableHorde"
import { GetWorker } from "../../types/stableHorde/api"
import { PutWorker } from "../../types/stableHorde/putWorker"

interface Props {
    worker: GetWorker
}

export const WorkerTable = (props: Props): JSX.Element => {
    const { worker } = props
    const queryClient = useQueryClient()

    const form = useWorkerForm({
        initialValues: {
            paused: worker.paused,
            maintenance: worker.maintenance_mode
        }
    })

    const mutation = useMutation<PutWorker, unknown, { id: string; data: PutWorker }, unknown>(
        (data) => {
            return putWorker(data.id, data.data)
        },
        {
            onSuccess: (data, vars) => {
                queryClient.setQueryData(workerKeys.detail(vars.id.toString()), (old: PutWorker | undefined) => {
                    if (old != null) {
                        return { ...old, ...data }
                    } else {
                        return data
                    }
                })

                // update the form to reflect new state
                const toSet = {
                    paused: data.paused ?? false,
                    maintenance: data.maintenance ?? false
                }
                if (!isEmpty(toSet)) {
                    form.setValues(toSet)
                    form.resetDirty(toSet)
                }
            }
        }
    )

    return (
        <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
            <form
                onSubmit={form.onSubmit((values, _event) => {
                    const data: PutWorker = {
                        paused: values.paused,
                        maintenance: values.maintenance
                    }
                    mutation.mutate({ id: worker.id, data: data })
                })}>
                <Box py={form.isDirty() ? 0.5 : 2.8} display="flex" justifyContent="end">
                    {form.isDirty() ? (
                        <Button sx={{ mr: 2 }} variant="contained" type="submit">
                            Save
                        </Button>
                    ) : null}
                </Box>
                <TableContainer component={Box}>
                    <Table size="small">
                        <TableBody>
                            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="body1">Worker name</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="body1">{worker.name}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="body1">Worker ID</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="body1">{worker.id}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="body1">Trusted</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Switch value={worker.trusted} disabled size="small" />
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="body1">Maintenance</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Switch {...form.getInputProps("maintenance", { type: "checkbox" })} size="small" />
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="body1">Paused</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Switch {...form.getInputProps("paused", { type: "checkbox" })} size="small" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>
        </Paper>
    )
}

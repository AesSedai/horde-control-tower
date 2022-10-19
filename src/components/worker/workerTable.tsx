import { useForm } from "@mantine/form"
import { Box, Switch, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import { GetWorker } from "../../types/stableHorde/api"

interface Props {
    worker: GetWorker
}

export const WorkerTable = (props: Props): JSX.Element => {
    const { worker } = props

    const form = useForm({
        initialValues: {
            paused: worker.paused,
            trusted: worker.trusted,
            maintenance: worker.maintenance_mode
        }
    })

    return (
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
                            <Switch {...form.getInputProps("trusted", { type: "checkbox" })} size="small" />
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
    )
}

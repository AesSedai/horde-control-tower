import { useForm } from "@mantine/form"
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
import { GetUser } from "../../types/stableHorde/getUser"

interface Props {
    user: GetUser
}

export const UserTable = (props: Props): JSX.Element => {
    const { user } = props

    const form = useForm({
        initialValues: {
            trusted: user.trusted,
            worker_invited: user.worker_invited
        }
    })

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
                                {user.username} {user.moderator ? "(moderator)" : ""}
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
                            <Typography variant="body1">Worker Invites</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <TextField
                                variant="standard"
                                {...form.getInputProps("worker_invited")}
                                sx={{ maxWidth: "100px" }}
                                InputProps={{
                                    sx: {
                                        "& input": {
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
                            <Typography variant="body1">{user.worker_count}</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

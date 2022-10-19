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
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { getUser, userKeys } from "../../services/stableHorde"
import { useUserFormContext } from "../context/userFormContext"

interface Props {
    userId: number
}

export const UserWrapper = (props: Props): JSX.Element => {
    const { userId } = props
    const { data } = useQuery(userKeys.detail(userId), () => getUser(userId), { staleTime: 1000 * 61 })
    const form = useUserFormContext()

    useEffect(() => {
        if (data != null) {
            const toSet = {
                trusted: data.trusted,
                worker_invite: data.worker_invited.toString()
            }
            form.setValues(toSet)
            form.resetDirty(toSet)
        }
    }, [data, userId])

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
                        <TableCell align="right">
                            <Typography variant="body1">{data.suspicious}</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

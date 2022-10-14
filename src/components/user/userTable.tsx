import { useForm } from "@mantine/form"
import { Box, Switch, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import { useEffect } from "react"
import { stableHorde } from "../../services/stableHorde"
import { useAppSelector } from "../../store/hooks"

export const UserTable = (): JSX.Element => {
    const userId = useAppSelector((state) => state.localState.selectedUser)
    const { data } = stableHorde.useGetUsersQuery(undefined, {
        selectFromResult: ({ data }) => ({
            // you somehow get a pass because your username is in the dataset twice.
            data: data?.find((user) => user.id === userId)
        })
    })

    const form = useForm({
        initialValues: {
            trusted: false,
            worker_invited: 0
        }
    })

    if (data == null) {
        return <></>
    }

    console.log("data", data)

    return (
        <TableContainer component={Box}>
            <Table>
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
                            <Switch {...form.getInputProps("trusted")} />
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <Typography variant="body1">Worker Invites</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="body1">{data.worker_invited}</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

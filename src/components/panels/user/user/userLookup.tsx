import StarBorderIcon from "@mui/icons-material/StarBorder"
import { Alert, Box, Button, Paper, Snackbar } from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { isEmpty } from "lodash-es"
import { useState } from "react"
import { UserFormProvider, useUserForm } from "../../../../context/userFormContext"
import { putUser, userKeys } from "../../../../services/stableHorde"
import { PutUserRequest } from "../../../../types/stableHorde/api"
import { useAppSelector } from "../../../redux/store/hooks"
import { UserAutocomplete } from "./userAutocomplete"
import { UserWrapper } from "./userWrapper"

export const UserLookup = (): JSX.Element => {
    const queryClient = useQueryClient()
    const userId = useAppSelector((state) => state.userPanel.selectedUser)
    const [open, setOpen] = useState(false)

    const form = useUserForm({
        initialValues: {
            trusted: false,
            flagged: false,
            worker_invite: "0"
        }
    })

    const mutation = useMutation<PutUserRequest, unknown, { id: number; data: PutUserRequest }, unknown>(
        (data) => {
            return putUser(data.id, data.data)
        },
        {
            onSuccess: (data, vars) => {
                queryClient.setQueryData(userKeys.detail(vars.id), (old: PutUserRequest | undefined) => {
                    if (old != null) {
                        return { ...old, ...data }
                    } else {
                        return data
                    }
                })

                // update the form to reflect new state
                const toSet = {
                    trusted: data.trusted ?? false,
                    flagged: data.flagged ?? false,
                    worker_invite: data.worker_invite?.toString() ?? "0"
                }
                if (!isEmpty(toSet)) {
                    form.setValues(toSet)
                    form.resetDirty(toSet)
                }

                setOpen(true)
            }
        }
    )

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }

        setOpen(false)
    }

    return (
        <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%", border: "2px solid #a3a3a3" }}>
                    Changes successfully saved!
                </Alert>
            </Snackbar>
            <form
                onSubmit={form.onSubmit((values, _event) => {
                    if (userId != null) {
                        const data: PutUserRequest = {
                            trusted: values.trusted,
                            flagged: values.flagged,
                            worker_invite: parseInt(values.worker_invite)
                        }
                        mutation.mutate({ id: userId, data: data })
                    }
                })}>
                <Box display="flex" justifyContent="space-between">
                    <UserAutocomplete />
                    {userId != null ? (
                        <Box display="flex" alignItems="center">
                            {form.isDirty() ? (
                                <Button sx={{ mr: 2 }} variant="contained" type="submit">
                                    Save
                                </Button>
                            ) : null}

                            <StarBorderIcon />
                        </Box>
                    ) : null}
                </Box>
                <UserFormProvider form={form}>
                    <Box display="flex">{userId != null && userId != -1 ? <UserWrapper /> : null}</Box>
                </UserFormProvider>
            </form>
        </Paper>
    )
}

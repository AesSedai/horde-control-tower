import { Autocomplete, TextField } from "@mui/material"
import { stableHorde } from "../../services/stableHorde"
import { setUser } from "../../slices/localState"
import { useAppDispatch } from "../../store/hooks"
import { GetUser } from "../../types/stableHorde/api"

export const UserAutocomplete = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const { data } = stableHorde.useGetUsersQuery(undefined, {
        selectFromResult: ({ data }) => ({
            // you somehow get a pass because your username is in the dataset twice.
            data: data?.filter((user) => user.username !== "gyrados#87")
        })
    })

    const onChange = (event: React.SyntheticEvent<Element, Event>, value: GetUser | null): void => {
        if (value != null) {
            dispatch(setUser(value.id))
        }
    }

    return (
        <Autocomplete
            disablePortal
            options={data ?? []}
            sx={{ width: 300 }}
            blurOnSelect
            autoHighlight
            loading={data == null}
            loadingText={"Loading users..."}
            getOptionLabel={(option) => option.username}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => <TextField {...params} variant="standard" label="User Lookup" />}
            onChange={onChange}
        />
    )
}

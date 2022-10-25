import { Autocomplete, TextField } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getUsers, userKeys } from "../../services/stableHorde"
import { setUser } from "../../slices/localState"
import { useAppDispatch } from "../../store/hooks"
import { GetUser } from "../../types/stableHorde/api"

export const UserAutocomplete = (): JSX.Element => {
    const dispatch = useAppDispatch()

    const { data } = useQuery(userKeys.all, getUsers)

    if (data == null) {
        return <></>
    }

    const filteredData = data.filter((user) => user.username !== "gyrados#87")

    const onChange = (event: React.SyntheticEvent<Element, Event>, value: GetUser | null): void => {
        if (value != null) {
            dispatch(setUser(value.id))
        }
    }

    return (
        <Autocomplete
            disablePortal
            options={filteredData ?? []}
            sx={{ width: 300 }}
            blurOnSelect
            autoHighlight
            loading={filteredData == null}
            loadingText={"Loading users..."}
            getOptionLabel={(option) => option.username}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            // This shouldn't error because it's identical to the API guide, but w/e
            // @ts-expect-error
            renderInput={(params) => <TextField {...params} variant="standard" label="User Lookup" size="small" />}
            onChange={onChange}
        />
    )
}

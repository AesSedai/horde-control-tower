import { useDebouncedValue } from "@mantine/hooks"
import { Autocomplete, TextField } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { isNumber, isString, toNumber } from "lodash-es"
import { useEffect, useState } from "react"
import { getUser, getUsers, userKeys } from "../../services/stableHorde"
import { GetUser } from "../../types/stableHorde/api"
import { isLikeGetUser } from "../../utils/isLikeGetUser"
import { setUser } from "../redux/slices/userPanelState"
import { useAppDispatch } from "../redux/store/hooks"

export const UserAutocomplete = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState(-1)
    const [debounced] = useDebouncedValue(inputValue, 400)

    const { data } = useQuery(userKeys.all, getUsers)
    const { data: userData, refetch } = useQuery(userKeys.detail(debounced), () => getUser(debounced), {
        enabled: false
    })

    useEffect(() => {
        if (isNumber(debounced) && debounced >= 4770) {
            refetch()
        }
    }, [debounced])

    if (data == null) {
        return <></>
    }

    const onChange = (event: React.SyntheticEvent<Element, Event>, value: GetUser | string | null): void => {
        if (isString(value)) {
            dispatch(setUser(parseInt(value)))
        } else if (isLikeGetUser(value)) {
            dispatch(setUser(value.id))
        }
    }

    return (
        <Autocomplete
            disablePortal
            options={[...(userData != null ? [userData] : []), ...(data ?? [])]}
            sx={{ width: 300 }}
            blurOnSelect
            autoHighlight
            freeSolo
            loading={data == null}
            loadingText={"Loading users..."}
            getOptionLabel={(option) => (isString(option) ? option : option.username)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            // This shouldn't error because it's identical to the API guide, but w/e
            // @ts-expect-error
            renderInput={(params) => <TextField {...params} variant="standard" label="User Lookup" size="small" />}
            onChange={onChange}
            onInputChange={(event, newInputValue) => {
                setInputValue(toNumber(newInputValue))
            }}
        />
    )
}

import { useDebouncedValue } from "@mantine/hooks"
import { Autocomplete, TextField } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { isString, last, toNumber } from "lodash-es"
import { useEffect, useState } from "react"
import { getUser, getUsers, userKeys } from "../../../../services/aiHorde"
import { GetUserResponse } from "../../../../types/stableHorde/api"
import { isLikeGetUser } from "../../../../utils/isLikeGetUser"
import { setUser } from "../../../redux/slices/userPanelState"
import { useAppDispatch } from "../../../redux/store/hooks"

const tokenizeUser = (input: string): number | null => {
    const end = last(input.split("#"))
    if (end == null) {
        return null
    }
    return toNumber(end)
}

export const UserAutocomplete = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState("")
    const [debounced] = useDebouncedValue(inputValue, 400)

    const { data } = useQuery(userKeys.all, getUsers)
    const { data: userData, refetch } = useQuery(
        userKeys.detail(tokenizeUser(debounced) ?? -1),
        () => getUser(tokenizeUser(debounced) ?? -1),
        {
            enabled: false
        }
    )

    useEffect(() => {
        refetch()
    }, [debounced])

    if (data == null) {
        return <></>
    }

    const onChange = (event: React.SyntheticEvent<Element, Event>, value: GetUserResponse | string | null): void => {
        if (isString(value)) {
            const tokenized = tokenizeUser(value)
            if (value !== "0" && tokenized !== 0) {
                dispatch(setUser(tokenizeUser(value) ?? -1))
            }
        } else if (isLikeGetUser(value)) {
            if (value.id !== 0) {
                dispatch(setUser(value.id))
            }
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
                // disallow selecting the Anonymous#0 user
                if (newInputValue !== "0" && tokenizeUser(newInputValue) !== 0) {
                    setInputValue(newInputValue)
                }
            }}
        />
    )
}

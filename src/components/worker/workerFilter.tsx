import { useDebouncedValue } from "@mantine/hooks"
import { TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { setWorkerFilter } from "../../slices/localState"
import { useAppDispatch } from "../../store/hooks"

export const WorkerFilter = (): JSX.Element => {
    const [filter, setFilter] = useState("")
    const [debounced] = useDebouncedValue(filter, 400);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setWorkerFilter(debounced))
    }, [debounced])

    return (
        <TextField
            label="Search & Filter"
            variant="outlined"
            value={filter}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFilter(event.target.value)
            }}
        />
    )
}

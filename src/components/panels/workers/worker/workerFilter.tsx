import { useDebouncedValue } from "@mantine/hooks"
import { TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { setWorkerFilter } from "../../../redux/slices/workerPanelState"
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks"

export const WorkerFilter = (): JSX.Element => {
    const workerFilter = useAppSelector((state) => state.workerPanel.workerFilter)
    const [filter, setFilter] = useState(workerFilter ?? "")
    const [debounced] = useDebouncedValue(filter, 400)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setWorkerFilter(debounced))
    }, [debounced])

    return (
        <TextField
            sx={{ mr: 2 }}
            label="Search & Filter"
            variant="outlined"
            value={filter}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFilter(event.target.value)
            }}
        />
    )
}

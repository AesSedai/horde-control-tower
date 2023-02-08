import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import {
    Box,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography
} from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getWorkers, workerKeys } from "../../services/stableHorde"
import { GetWorker } from "../../types/stableHorde/getWorker"
import { WorkerCard } from "../worker/workerCard"

export const WorkersPanel = (): JSX.Element => {
    const [sortKey, setSortKey] = useState<keyof GetWorker>("name")
    const [order, setOrder] = useState<"asc" | "desc">("asc")

    const { data } = useQuery(workerKeys.all, () => getWorkers(), {
        refetchInterval: 1000 * 30,
        select: (data) => {
            const dir = order === "asc" ? 1 : -1
            // sort the data, strip MPS from name
            return data
                .map((worker) => {
                    return { ...worker, performance: worker.performance.replace(" megapixelsteps per second", "") }
                })
                .sort((a, b) => (a[sortKey] > b[sortKey] ? dir : -dir))
        }
    })

    // order: keyof GetWorker
    const changeSortKey = (event: SelectChangeEvent<keyof GetWorker>) => {
        setSortKey(event.target.value as keyof GetWorker)
    }

    const changeSortOrder = (order: "asc" | "desc") => {
        setOrder(order)
    }

    if (data == null) {
        return <></>
    }

    return (
        <>
            <Box display="flex" justifyContent="space-between" pb={2}>
                <Box>
                    <Typography variant="h5">Worker List</Typography>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                    <FormControl sx={{ mr: 1 }}>
                        <InputLabel>Sort Key</InputLabel>
                        <Select
                            value={sortKey}
                            label="Sort Key"
                            onChange={changeSortKey}
                            sx={{ ".MuiSelect-select": { py: 1 } }}>
                            <MenuItem value={"name"}>Name</MenuItem>
                            <MenuItem value={"uptime"}>Uptime</MenuItem>
                            <MenuItem value={"megapixelsteps_generated"}>MPS</MenuItem>
                        </Select>
                    </FormControl>
                    {order === "asc" ? (
                        <IconButton onClick={() => changeSortOrder("desc")}>
                            <ArrowUpwardIcon />
                        </IconButton>
                    ) : (
                        <IconButton onClick={() => changeSortOrder("asc")}>
                            <ArrowDownwardIcon />
                        </IconButton>
                    )}
                </Box>
            </Box>
            <Grid container spacing={2}>
                {data.map((worker) => (
                    <WorkerCard key={worker.id} worker={worker} />
                ))}
            </Grid>
        </>
    )
}

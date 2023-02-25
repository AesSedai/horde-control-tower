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
import { isString, orderBy } from "lodash-es"
import { getWorkers, workerKeys } from "../../../services/stableHorde"
import { GetWorkerResponse } from "../../../types/stableHorde/api"
import { setOrder, setSortKey } from "../../redux/slices/workerPanelState"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import { WorkerCard } from "./worker/workerCard"
import { WorkerFilter } from "./worker/workerFilter"

export const WorkersPanel = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const sortKey = useAppSelector((state) => state.workerPanel.sortKey)
    const order = useAppSelector((state) => state.workerPanel.order)
    const workerFilter = useAppSelector((state) => state.workerPanel.workerFilter)

    const { data } = useQuery(workerKeys.all, () => getWorkers(), {
        refetchInterval: 1000 * 30,
        select: (data) => {
            // sort the data, strip MPS from name
            const filter = workerFilter?.toLowerCase()

            return orderBy(
                data
                    .filter((worker) => {
                        // filter out text2text for now
                        if (worker.performance.includes("per form") || worker.performance.includes("tokens")) {
                            return false
                        }
                        if (filter == null) {
                            return true
                        } else {
                            return (
                                worker.name.toLowerCase().includes(filter) ||
                                (worker.owner ?? "").toLowerCase().includes(filter) ||
                                worker.id.toLowerCase().includes(filter)
                            )
                        }
                    })
                    .map((worker) => {
                        return { ...worker, performance: worker.performance.replace(" megapixelsteps per second", "") }
                    }),
                [
                    (worker) => {
                        const value = worker[sortKey]
                        if (isString(value)) {
                            return value.toLowerCase()
                        } else {
                            return value
                        }
                    }
                ],
                [order]
            )
        }
    })

    const changeSortKey = (event: SelectChangeEvent<keyof GetWorkerResponse>) => {
        dispatch(setSortKey(event.target.value as keyof GetWorkerResponse))
    }

    const changeSortOrder = (order: "asc" | "desc") => {
        dispatch(setOrder(order))
    }

    if (data == null) {
        return <></>
    }

    return (
        <>
            <Box display="flex" justifyContent="space-between" pb={2}>
                <Box display="flex" alignItems="center">
                    <Typography variant="h5" sx={{ mr: { xs: 1, md: 2 } }}>
                        Worker List
                    </Typography>
                    <WorkerFilter />
                </Box>
                <Box display="flex" justifyContent="flex-end" alignItems="center">
                    <FormControl sx={{ mr: 1 }}>
                        <InputLabel>Sort Key</InputLabel>
                        <Select
                            value={sortKey}
                            label="Sort Key"
                            onChange={changeSortKey}
                            sx={{ ".MuiSelect-select": { py: 1 } }}>
                            <MenuItem value={"name"}>Name</MenuItem>
                            <MenuItem value={"performance"}>Performance</MenuItem>
                            <MenuItem value={"uptime"}>Uptime</MenuItem>
                            <MenuItem value={"megapixelsteps_generated"}>MPS Generated</MenuItem>
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

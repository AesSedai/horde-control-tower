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
import { first, isString, orderBy } from "lodash-es"
import { getWorkers, workerKeys } from "../../../services/aiHorde"
import { GetWorkerResponse } from "../../../types/stableHorde/api"
import { setOrder, setSortKey, setWorkerType } from "../../redux/slices/workerPanelState"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import { WorkerCard } from "./worker/workerCard"
import { WorkerFilter } from "./worker/workerFilter"

const sortKeyList: Record<GetWorkerResponse["type"], Array<{ parameter: keyof GetWorkerResponse; label: string }>> = {
    image: [
        { parameter: "name", label: "Name" },
        { parameter: "performance", label: "Performance" },
        { parameter: "bridge_agent", label: "Bridge Agent" },
        { parameter: "uptime", label: "Uptime" },
        { parameter: "megapixelsteps_generated", label: "MPS Generated" }
    ],
    interrogation: [
        { parameter: "name", label: "Name" },
        { parameter: "performance", label: "Performance" },
        { parameter: "bridge_agent", label: "Bridge Agent" },
        { parameter: "uptime", label: "Uptime" }
    ],
    text: [
        { parameter: "name", label: "Name" },
        { parameter: "performance", label: "Performance" },
        { parameter: "bridge_agent", label: "Bridge Agent" },
        { parameter: "uptime", label: "Uptime" }
    ]
}

export const WorkersPanel = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const sortKey = useAppSelector((state) => state.workerPanel.sortKey)
    const order = useAppSelector((state) => state.workerPanel.order)
    const workerFilter = useAppSelector((state) => state.workerPanel.workerFilter)
    const workerType = useAppSelector((state) => state.workerPanel.workerType)

    const { data } = useQuery(workerKeys.all, () => getWorkers(), {
        refetchInterval: 1000 * 30,
        select: (data) => {
            // sort the data, strip MPS from name
            const filter = workerFilter?.toLowerCase()

            return orderBy(
                data.filter((worker) => {
                    // filter out text2text for now
                    if (worker.type !== workerType) {
                        return false
                    }
                    if (filter == null) {
                        return true
                    } else {
                        return (
                            worker.name.toLowerCase().includes(filter) ||
                            (worker.owner ?? "").toLowerCase().includes(filter) ||
                            worker.id.toLowerCase().includes(filter) ||
                            worker.bridge_agent.toLowerCase().includes(filter)
                        )
                    }
                }),
                [
                    (worker) => {
                        const value = worker[sortKey]
                        if (isString(value)) {
                            if (sortKey === "performance" && parseFloat(value)) {
                                return parseFloat(value)
                            }
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

    const changeWorkerType = (event: SelectChangeEvent<GetWorkerResponse["type"]>) => {
        const type = event.target.value as GetWorkerResponse["type"]
        dispatch(setWorkerType(type))
        // also reset sort key
        dispatch(setSortKey(first(sortKeyList[type])?.parameter ?? "name"))
    }

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
                        <InputLabel>Worker Type</InputLabel>
                        <Select
                            value={workerType}
                            label="Worker Type"
                            onChange={changeWorkerType}
                            sx={{ ".MuiSelect-select": { py: 1 } }}>
                            <MenuItem value={"image"}>Image</MenuItem>
                            <MenuItem value={"interrogation"}>Interrogation</MenuItem>
                            <MenuItem value={"text"}>Text</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ mr: 1 }}>
                        <InputLabel>Sort Key</InputLabel>
                        <Select
                            value={sortKey}
                            label="Sort Key"
                            onChange={changeSortKey}
                            sx={{ ".MuiSelect-select": { py: 1 } }}>
                            {sortKeyList[workerType].map((elem) => (
                                <MenuItem key={elem.label} value={elem.parameter}>{elem.label}</MenuItem>
                            ))}
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

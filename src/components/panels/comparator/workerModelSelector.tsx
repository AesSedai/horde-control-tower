import { Autocomplete, Box, TextField, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { isArray, isEqual, isString, orderBy } from "lodash-es"
import { useEffect } from "react"
import { getModels, getWorkers, workerKeys } from "../../../services/stableHorde"
import { GetModelResponse, GetWorkerResponse } from "../../../types/stableHorde/api"
import { isLikeGetModel } from "../../../utils/isLikeGetModel"
import { isLikeGetWorkerArr } from "../../../utils/isLikeGetWorker"
import { setSelectedModel, setSelectedWorkers } from "../../redux/slices/comparatorPanelState"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"

const width = "175px"

export const WorkerModelSelector = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const selectedWorkers = useAppSelector((state) => state.comparatorPanel.selectedWorkers)
    const selectedModel = useAppSelector((state) => state.comparatorPanel.selectedModel)

    const handleWorkerChange = (
        event: React.SyntheticEvent<Element, Event>,
        value: GetWorkerResponse[] | string | null
    ) => {
        if (isArray(value) && value.length === 0) {
            // reset
            dispatch(setSelectedWorkers([]))
        } else if (isLikeGetWorkerArr(value)) {
            dispatch(setSelectedWorkers(value))
        }
    }

    const handleModelChange = (
        event: React.SyntheticEvent<Element, Event>,
        value: GetModelResponse | string | null
    ): void => {
        if (value == null) {
            // reset
            dispatch(setSelectedModel(null))
        } else if (isLikeGetModel(value)) {
            dispatch(setSelectedModel(value))
        }
    }

    const { data: workers } = useQuery(workerKeys.all, () => getWorkers(), {
        refetchInterval: 1000 * 30,
        select: (data) => {
            // sort the data
            return orderBy(
                data,
                [
                    (worker) => {
                        return worker.name.toLowerCase()
                    }
                ],
                ["asc"]
            )
        }
    })

    const { data: models } = useQuery(["models"], getModels, {
        staleTime: 1000 * 30,
        refetchInterval: 1000 * 30,
        select: (data) => {
            // sort the data
            return orderBy(
                data,
                [
                    (model) => {
                        return model.name.toLowerCase()
                    }
                ],
                ["asc"]
            )
        }
    })

    // When the REST API data response changes, or user changes selected
    // worker or models, filter selected workers based on selected model matching
    useEffect(() => {
        if (selectedModel != null && selectedWorkers.length > 0) {
            const selectedIds = selectedWorkers.map((worker) => worker.id)
            const checkNewFiltered = selectedWorkers.filter((worker) => {
                return worker?.models?.includes(selectedModel.name)
            })
            const checkNewFilteredIds = checkNewFiltered.map((worker) => worker.id)
            if (!isEqual(selectedIds, checkNewFilteredIds)) {
                dispatch(setSelectedWorkers(checkNewFiltered))
            }
        } else if (selectedModel == null && selectedWorkers.length > 0) {
            dispatch(setSelectedWorkers([]))
        }
    }, [workers, models, selectedWorkers, selectedModel])

    if (workers == null || models == null) {
        return <></>
    }

    const filteredWorkers = workers.filter((worker) => {
        if (selectedModel == null) {
            return true
        }
        return worker?.models?.includes(selectedModel.name)
    })

    return (
        <Box>
            <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                <Typography variant="body1" sx={{ width: width }}>
                    Model
                </Typography>

                <Autocomplete
                    fullWidth
                    disablePortal
                    options={models}
                    blurOnSelect
                    value={selectedModel}
                    autoHighlight
                    getOptionLabel={(option) => (isString(option) ? option : option.name)}
                    isOptionEqualToValue={(option, value) => option.name === value.name}
                    filterSelectedOptions
                    renderInput={(params) => (
                        // This shouldn't error because it's identical to the API guide, but w/e
                        // @ts-expect-error
                        <TextField {...params} label="Selected Model" />
                    )}
                    onChange={handleModelChange}
                />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                <Typography variant="body1" sx={{ width: width }}>
                    Workers
                </Typography>

                <Autocomplete
                    fullWidth
                    multiple
                    disablePortal
                    options={filteredWorkers}
                    value={selectedWorkers}
                    getOptionLabel={(option) => option.name}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    filterSelectedOptions
                    renderInput={(params) => (
                        // This shouldn't error because it's identical to the API guide, but w/e
                        // @ts-expect-error
                        <TextField {...params} label="Selected Workers" />
                    )}
                    onChange={handleWorkerChange}
                />
            </Box>
        </Box>
    )
}

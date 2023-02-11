import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { GetWorker } from "../../../types/stableHorde/api"

interface WorkerPanelStateSliceType {
    sortKey: keyof GetWorker
    order: "asc" | "desc"
    workerFilter?: string
}

const initialState: WorkerPanelStateSliceType = {
    sortKey: "name",
    order: "asc"
}

export const workerPanelStateSlice = createSlice({
    name: "workerPanel",
    initialState,
    reducers: {
        setWorkerFilter: (state, action: PayloadAction<string>) => {
            state.workerFilter = action.payload
        },
        setSortKey: (state, action: PayloadAction<keyof GetWorker>) => {
            state.sortKey = action.payload
        },
        setOrder: (state, action: PayloadAction<"asc" | "desc">) => {
            state.order = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setWorkerFilter, setSortKey, setOrder } = workerPanelStateSlice.actions

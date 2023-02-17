import { createSlice } from "@reduxjs/toolkit"

interface LocalStateSliceType {
    selectedUser?: number
    workerFilter?: string
}

const initialState: LocalStateSliceType = {}

export const localStateSlice = createSlice({
    name: "localState",
    initialState,
    reducers: {}
})

// Action creators are generated for each case reducer function
// export const { setUser, setWorkerFilter } = localStateSlice.actions

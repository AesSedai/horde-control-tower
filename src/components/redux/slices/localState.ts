import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface LocalStateSliceType {
    sidebarOpen: boolean
}

const initialState: LocalStateSliceType = {
    sidebarOpen: false
}

export const localStateSlice = createSlice({
    name: "localState",
    initialState,
    reducers: {
        setSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.sidebarOpen = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setSidebarOpen } = localStateSlice.actions

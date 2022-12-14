import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface LocalStateSliceType {
    selectedUser?: number
}

const initialState: LocalStateSliceType = {}

export const localStateSlice = createSlice({
    name: "localState",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<number>) => {
            state.selectedUser = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setUser } = localStateSlice.actions

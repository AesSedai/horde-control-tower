import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserPanelStateSliceType {
    selectedUser?: number
}

const initialState: UserPanelStateSliceType = {}

export const userPanelStateSlice = createSlice({
    name: "userPanel",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<number>) => {
            state.selectedUser = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setUser } = userPanelStateSlice.actions

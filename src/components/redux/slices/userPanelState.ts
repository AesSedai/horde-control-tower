import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type UserPanelOptions = false | "workers" | "ratings"

interface UserPanelStateSliceType {
    selectedUser?: number
    expandedPanel: UserPanelOptions
}

const initialState: UserPanelStateSliceType = {
    expandedPanel: "workers"
}

export const userPanelStateSlice = createSlice({
    name: "userPanel",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<number>) => {
            state.selectedUser = action.payload
        },
        setExpandedPanel: (state, action: PayloadAction<UserPanelOptions>) => {
            state.expandedPanel = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setUser, setExpandedPanel } = userPanelStateSlice.actions

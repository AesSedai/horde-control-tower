import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PersistStateSliceType {
    apikey: string
    selectedTab: string
    favorites: number[]
}

export const initialState: PersistStateSliceType = {
    apikey: "",
    selectedTab: "1",
    favorites: []
}

export const persistStateSlice = createSlice({
    name: "persist",
    initialState,
    reducers: {
        setKey: (state, action: PayloadAction<string>) => {
            state.apikey = action.payload
        },
        setSelectedTab: (state, action: PayloadAction<string>) => {
            state.selectedTab = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setKey, setSelectedTab } = persistStateSlice.actions

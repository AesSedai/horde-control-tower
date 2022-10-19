import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PersistSliceType {
    apikey: string,
    favorites: number[]
}

const initialState: PersistSliceType = {
    apikey: "",
    favorites: []
}

export const persistSlice = createSlice({
    name: "persist",
    initialState,
    reducers: {
        setKey: (state, action: PayloadAction<string>) => {
            state.apikey = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setKey } = persistSlice.actions

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ApiKeySliceType {
    apikey?: string
}

const initialState: ApiKeySliceType = {}

export const apiKeySlice = createSlice({
    name: "apikey",
    initialState,
    reducers: {
        setKey: (state, action: PayloadAction<string>) => {
            state.apikey = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setKey } = apiKeySlice.actions

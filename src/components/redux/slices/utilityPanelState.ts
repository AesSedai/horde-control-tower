import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UtilityPanelStateSliceType {
    prompt: string
}

const initialState: UtilityPanelStateSliceType = {
    prompt: ""
}

export const utilityPanelStateSlice = createSlice({
    name: "utilityPanel",
    initialState,
    reducers: {
        setPrompt: (state, action: PayloadAction<string>) => {
            state.prompt = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setPrompt } = utilityPanelStateSlice.actions

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UtilityPanelStateSliceType {
    prompt: string
    ipAddr: string
}

const initialState: UtilityPanelStateSliceType = {
    prompt: "",
    ipAddr: ""
}

export const utilityPanelStateSlice = createSlice({
    name: "utilityPanel",
    initialState,
    reducers: {
        setPrompt: (state, action: PayloadAction<string>) => {
            state.prompt = action.payload
        },
        setIpAddr: (state, action: PayloadAction<string>) => {
            state.ipAddr = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setPrompt, setIpAddr } = utilityPanelStateSlice.actions

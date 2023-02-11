import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SettingsPanelStateSliceType {
    showPassword: boolean
}

const initialState: SettingsPanelStateSliceType = {
    showPassword: false
}

export const settingsPanelStateSlice = createSlice({
    name: "settingsPanel",
    initialState,
    reducers: {
        setShowPassword: (state, action: PayloadAction<boolean>) => {
            state.showPassword = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setShowPassword } = settingsPanelStateSlice.actions

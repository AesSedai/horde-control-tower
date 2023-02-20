import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
    GetGenerateCheckResponse,
    GetGenerateStatusResponse,
    PostGenerateAsyncRequest
} from "../../../types/stableHorde/api"

export interface ImageGen {
    id: string
    payload: PostGenerateAsyncRequest
    state: "pending" | "check" | "status" | "complete" | "error"
    check: GetGenerateCheckResponse | null
    status: GetGenerateStatusResponse | null
}

export interface PersistStateSliceType {
    apikey: string
    selectedTab: string
    favorites: number[]
    imageGens: ImageGen[]
}

export const initialState: PersistStateSliceType = {
    apikey: "",
    selectedTab: "1",
    favorites: [],
    imageGens: []
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
        },
        resetImageGens: (state) => {
            state.imageGens = []
        },
        addImageGen: (state, action: PayloadAction<ImageGen>) => {
            const exists = state.imageGens.find((gen) => gen.id === action.payload.id)
            if (!exists) {
                // push as "pending"
                state.imageGens.push(action.payload)
            }
        },
        updateImageGen: (state, action: PayloadAction<ImageGen>) => {
            const idx = state.imageGens.findIndex((gen) => gen.id === action.payload.id)
            if (idx != null) {
                state.imageGens[idx] = action.payload
            }

        }
    }
})

// Action creators are generated for each case reducer function
export const { setKey, setSelectedTab, resetImageGens, addImageGen, updateImageGen } = persistStateSlice.actions

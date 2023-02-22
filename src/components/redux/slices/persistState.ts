import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
    GetGenerateCheckResponse,
    GetGenerateStatusResponse,
    PostGenerateAsyncRequest
} from "../../../types/stableHorde/api"

export interface ImageGen {
    id: string
    payload: PostGenerateAsyncRequest
    state: "pending" | "check" | "status" | "complete" | "error" | "delete"
    check: GetGenerateCheckResponse | null
    status: GetGenerateStatusResponse | null
}

export interface PersistStateSliceType {
    apikey: string
    selectedTab: string
    genFavorites: { name: string; form: PostGenerateAsyncRequest }[]
    imageGens: ImageGen[]
}

export const initialState: PersistStateSliceType = {
    apikey: "",
    selectedTab: "1",
    genFavorites: [],
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
        },
        addGenFavorite: (state, action: PayloadAction<{ name: string; form: PostGenerateAsyncRequest }>) => {
            state.genFavorites.push(action.payload)
        },
        updateGenFavorite: (state, action: PayloadAction<{ idx: number; form: PostGenerateAsyncRequest }>) => {
            state.genFavorites[action.payload.idx] = {
                name: state.genFavorites[action.payload.idx]!.name,
                form: action.payload.form
            }
        },
        deleteGenFavorite: (state, action: PayloadAction<number>) => {
            state.genFavorites.splice(action.payload)
        },
        resetExceptApiKey: (state) => {
            state = {
                ...initialState,
                apikey: state.apikey
            }
            return state
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setKey,
    setSelectedTab,
    resetImageGens,
    addImageGen,
    updateImageGen,
    addGenFavorite,
    resetExceptApiKey,
    updateGenFavorite,
    deleteGenFavorite
} = persistStateSlice.actions

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PostGenerateAsyncRequest } from "../../../types/stableHorde/api"
import { GetModelResponse } from "../../../types/stableHorde/getModel"
import { GetWorkerResponse } from "../../../types/stableHorde/getWorker"

interface ComparatorPanelStateSliceType {
    selectedModel: GetModelResponse | null
    selectedWorkers: GetWorkerResponse[]
    genForm: PostGenerateAsyncRequest
}

const initialState: ComparatorPanelStateSliceType = {
    selectedModel: null,
    selectedWorkers: [],
    genForm: {
        prompt: "",
        params: {
            sampler_name: "k_euler",
            toggles: [1, 4],
            cfg_scale: 7,
            seed: "",
            height: 512,
            width: 512,
            seed_variation: 1,
            post_processing: [],
            karras: true,
            tiling: false,
            hires_fix: false,
            clip_skip: 1,
            steps: 20,
            n: 1
        },
        nsfw: true,
        trusted_workers: false,
        censor_nsfw: false,
        workers: [],
        models: [],
        r2: true,
        shared: true
    }
}

export const comparatorPanelStateSlice = createSlice({
    name: "comparatorPanel",
    initialState,
    reducers: {
        setSelectedModel: (state, action: PayloadAction<GetModelResponse | null>) => {
            state.selectedModel = action.payload
        },
        setSelectedWorkers: (state, action: PayloadAction<GetWorkerResponse[]>) => {
            state.selectedWorkers = action.payload
        },
        setGenForm: (state, action: PayloadAction<PostGenerateAsyncRequest>) => {
            // there's some additional stuff included in payload causing an issue w/ redux
            // so structuredClone to prevent that from coming too
            state.genForm = structuredClone(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { setSelectedModel, setSelectedWorkers, setGenForm } = comparatorPanelStateSlice.actions

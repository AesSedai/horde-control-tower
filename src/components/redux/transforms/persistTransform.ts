import { createTransform } from "redux-persist"
import { initialState, persistStateSlice, PersistStateSliceType } from "../slices/persistState"

export const persistTransform = createTransform<PersistStateSliceType, PersistStateSliceType>(
    // transform state on its way to being serialized and persisted.
    (inboundState, key) => {
        return inboundState
    },
    // transform state being rehydrated
    (outboundState, key) => {
        return Object.assign({}, initialState, outboundState)
    },
    // define which reducers this transform gets called for.
    { whitelist: [persistStateSlice.name] }
)

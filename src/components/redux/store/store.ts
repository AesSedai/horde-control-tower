import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { localStateSlice } from "../slices/localState"
import { persistStateSlice } from "../slices/persistState"
import { settingsPanelStateSlice } from "../slices/settingsPanelState"
import { userPanelStateSlice } from "../slices/userPanelState"
import { utilityPanelStateSlice } from "../slices/utilityPanelState"
import { workerPanelStateSlice } from "../slices/workerPanelState"
import { persistTransform } from "../transforms/persistTransform"

// only persist the API key
const persistConfig = {
    key: "root",
    storage,
    whitelist: [persistStateSlice.name],
    transforms: [persistTransform]
}

const reducers = combineReducers({
    [persistStateSlice.name]: persistStateSlice.reducer,
    [localStateSlice.name]: localStateSlice.reducer,
    [settingsPanelStateSlice.name]: settingsPanelStateSlice.reducer,
    [userPanelStateSlice.name]: userPanelStateSlice.reducer,
    [utilityPanelStateSlice.name]: utilityPanelStateSlice.reducer,
    [workerPanelStateSlice.name]: workerPanelStateSlice.reducer
})

export type RootReducer = ReturnType<typeof reducers>

const persistedReducer = persistReducer<RootReducer>(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }),
    devTools: import.meta.env.DEV
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch

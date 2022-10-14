import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { stableHorde } from "../services/stableHorde"
import { apiKeySlice } from "../slices/apikey"
import { localStateSlice } from "../slices/localState"

const reducers = combineReducers({
    [stableHorde.reducerPath]: stableHorde.reducer,
    [apiKeySlice.name]: apiKeySlice.reducer,
    [localStateSlice.name]: localStateSlice.reducer
})

// only persist the API key
const persistConfig = {
    key: "root",
    storage,
    whitelist: [apiKeySlice.name]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(stableHorde.middleware),
    devTools: true
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch

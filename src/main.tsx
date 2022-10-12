import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import {
    // unstable_createMuiStrictModeTheme as createMuiTheme,
    createTheme,
    ThemeProvider
} from "@mui/material/styles"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { App } from "./App"
import { persistor, store } from "./store/store"

export const muiCache = createCache({
    key: "mui",
    prepend: true
})

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
})

createRoot(document.getElementById("root") as HTMLElement).render(
    <CacheProvider value={muiCache}>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </ThemeProvider>
    </CacheProvider>
)

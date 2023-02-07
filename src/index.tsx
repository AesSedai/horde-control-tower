import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import {
    // unstable_createMuiStrictModeTheme as createMuiTheme,
    createTheme,
    ThemeProvider
} from "@mui/material/styles"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { App } from "./App"
import "./index.css"
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

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

createRoot(document.getElementById("root") as HTMLElement).render(
    <CacheProvider value={muiCache}>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <App />
                    </PersistGate>
                </Provider>
                {import.meta.env.DEV ? <ReactQueryDevtools /> : null}
            </QueryClientProvider>
        </ThemeProvider>
    </CacheProvider>
)

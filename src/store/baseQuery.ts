import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import type { RootState } from "./store"

export const baseQuery = fetchBaseQuery({
    baseUrl: "https://stablehorde.net/api/v2/",
    prepareHeaders: (headers, { getState }) => {
        const apikey = (getState() as RootState).apikey.apikey

        // If we have a token set in state, let's assume that we should be passing it.
        if (apikey) {
            headers.set("apikey", apikey)
        }

        return headers
    }
})

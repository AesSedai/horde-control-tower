import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery } from "../store/baseQuery"
import { GetStatusMode, GetStatusPerformance, GetUser, GetWorker } from "../types/stableHorde/api"

// Define a service using a base URL and expected endpoints
export const stableHorde = createApi({
    reducerPath: "stableHorde",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getStatusMode: builder.query<GetStatusMode, void>({
            query: () => "status/modes"
        }),
        getStatusPerformance: builder.query<GetStatusPerformance, void>({
            query: () => "status/performance"
        }),
        getUsers: builder.query<GetUser[], void>({
            query: () => "users"
        }),
        getUser: builder.query<GetUser, string>({
            query: (id) => `users/${id}`
        }),
        getWorkers: builder.query<GetWorker[], void>({
            query: () => "workers"
        }),
        getWorker: builder.query<GetWorker, string>({
            query: (id) => `workers/${id}`
        })
    })
})

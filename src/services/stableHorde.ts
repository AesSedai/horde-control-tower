import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery } from "../store/baseQuery"
import { GetStatusMode, GetStatusPerformance, GetUsers } from "../types/stableHorde/api"

// Define a service using a base URL and expected endpoints
export const stableHorde = createApi({
    reducerPath: "stableHorde",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getStatusMode: builder.query<GetStatusMode, void>({
            query: () => "status/modes"
        }),
        getUsers: builder.query<GetUsers[], void>({
            query: () => "users"
        }),
        getStatusPerformance: builder.query<GetStatusPerformance, void>({
            query: () => "status/performance"
        })
    })
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetStatusModeQuery, useGetUsersQuery, useGetStatusPerformanceQuery } = stableHorde

import { GetStatusMode, GetStatusPerformance, GetUser, GetWorker, PutUser } from "../types/stableHorde/api"
import { axiosBase, axiosLocal } from "../utils/axios"

// Define a service using a base URL and expected endpoints
export const getFindUser = (apikey: string): Promise<GetUser> =>
    axiosBase.get("find_user", { headers: { apikey: apikey } })
export const getStatusMode = (): Promise<GetStatusMode> =>
    axiosBase.get("status/modes").then((response) => response.data)
export const getStatusPerformance = (): Promise<GetStatusPerformance> =>
    axiosBase.get("status/performance").then((response) => response.data)
export const getUsers = (): Promise<GetUser[]> => axiosLocal.get("users.json").then((response) => response.data)
export const getUser = (id: number): Promise<GetUser> => axiosBase.get(`users/${id}`).then((response) => response.data)
export const getWorkers = (): Promise<GetWorker[]> => axiosBase.get("workers").then((response) => response.data)
export const getWorker = (id: string): Promise<GetWorker> =>
    axiosBase.get(`workers/${id}`).then((response) => response.data)

export const putUser = <T extends PutUser>(id: number, payload: T) => axiosBase.put(`users/${id}`, payload)

export const userKeys = {
    all: ["users"] as const,
    lists: () => [...userKeys.all, "list"] as const,
    list: (filters: string) => [...userKeys.lists(), { filters }] as const,
    details: () => [...userKeys.all, "detail"] as const,
    detail: (id: number) => [...userKeys.details(), id] as const
}

export const workerKeys = {
    all: ["workers"] as const,
    lists: () => [...workerKeys.all, "list"] as const,
    list: (filters: string) => [...workerKeys.lists(), { filters }] as const,
    details: () => [...workerKeys.all, "detail"] as const,
    detail: (id: string) => [...workerKeys.details(), id] as const
}

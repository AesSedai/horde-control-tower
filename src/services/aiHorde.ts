import {
    DeleteGenerateStatusResponse,
    DeleteIpAddrRequest,
    DeleteIpAddrResponse,
    GetGenerateCheckResponse,
    GetGenerateStatusResponse,
    GetModelResponse,
    GetStatusModeResponse,
    GetStatusPerformanceResponse,
    GetUserResponse,
    GetWorkerResponse,
    PostFiltersRequest,
    PostFiltersResponse,
    PostGenerateAsyncRequest,
    PostGenerateAsyncResponse,
    PutUserRequest,
    PutWorkerRequest
} from "../types/stableHorde/api"
import { axiosHordeBase, axiosLocal } from "../utils/axios"

// Define a service using a base URL and expected endpoints
export const getFindUser = (apikey: string): Promise<GetUserResponse> =>
    axiosHordeBase.get("find_user", { headers: { apikey: apikey } }).then((response) => response.data)
export const getStatusMode = (): Promise<GetStatusModeResponse> =>
    axiosHordeBase.get("status/modes").then((response) => response.data)
export const getStatusPerformance = (): Promise<GetStatusPerformanceResponse> =>
    axiosHordeBase.get("status/performance").then((response) => response.data)
export const getUsers = (): Promise<GetUserResponse[]> => axiosLocal.get("users.json").then((response) => response.data)
export const getUser = (id: number): Promise<GetUserResponse> =>
    axiosHordeBase.get(`users/${id}`).then((response) => response.data)
export const getWorkers = (): Promise<GetWorkerResponse[]> =>
    axiosHordeBase.get("workers").then((response) => response.data)
export const getWorker = (id: string): Promise<GetWorkerResponse> =>
    axiosHordeBase.get(`workers/${id}`).then((response) => response.data)
export const getModels = (): Promise<GetModelResponse[]> =>
    axiosHordeBase.get("status/models").then((response) => response.data)

export const putUser = <T extends PutUserRequest>(id: number, payload: T): Promise<T> =>
    axiosHordeBase.put(`users/${id}`, payload).then((response) => response.data)
export const putWorker = <T extends PutWorkerRequest>(id: string, payload: T): Promise<T> =>
    axiosHordeBase.put(`workers/${id}`, payload).then((response) => response.data)

export const postFilters = (payload: PostFiltersRequest): Promise<PostFiltersResponse> =>
    axiosHordeBase.post("filters", payload).then((response) => response.data)

export const postGenerateAsync = (payload: PostGenerateAsyncRequest): Promise<PostGenerateAsyncResponse> =>
    axiosHordeBase.post("generate/async", payload).then((response) => response.data)
export const getGenerateCheck = (id: string): Promise<GetGenerateCheckResponse> =>
    axiosHordeBase.get(`generate/check/${id}`).then((response) => response.data)
export const getGenerateStatus = (id: string): Promise<GetGenerateStatusResponse> =>
    axiosHordeBase.get(`generate/status/${id}`).then((response) => response.data)
export const deleteGenerateStatus = (id: string): Promise<DeleteGenerateStatusResponse> =>
    axiosHordeBase.delete(`generate/status/${id}`).then((response) => response.data)

export const deleteIpAddr = (payload: DeleteIpAddrRequest): Promise<DeleteIpAddrResponse> =>
    axiosHordeBase.delete(`operations/ipaddr`, { data: payload }).then((response) => response.data)

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

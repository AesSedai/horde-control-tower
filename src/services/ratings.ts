import {
    GetUserCheck,
    GetUserRatings,
    GetUserValidate,
    PostUserFlagResponse,
    PostUserModifyPayload,
    PostUserModifyResponse
} from "../types/ratings/api"
import { axiosRatingsBase } from "../utils/axios"

export type GetUserRatingsQueryParams = {
    rating_comparison?: "eq"
    artifacts_comparison?: "eq"
    limit?: number
    offset?: number
    format?: "json"
}

const ratingsQueryDefaultParams = {
    format: "json",
    limit: 100
}

// Define a service using a base URL and expected endpoints
export const getUserRatings = (params?: GetUserRatingsQueryParams): Promise<GetUserRatings> =>
    axiosRatingsBase
        .get("user/ratings", { params: Object.assign({}, ratingsQueryDefaultParams, params) })
        .then((response) => response.data)

export const getUserValidate = (id: number, params?: GetUserRatingsQueryParams): Promise<GetUserValidate> =>
    axiosRatingsBase
        .get(`user/validate/${id}`, { params: Object.assign({}, ratingsQueryDefaultParams, params) })
        .then((response) => response.data)

export const getUserCheck = (id: number): Promise<GetUserCheck> =>
    axiosRatingsBase.get(`user/check/${id}`).then((response) => response.data)

export const postUserFlagRatings = (id: number): Promise<PostUserFlagResponse> =>
    axiosRatingsBase.post(`user/flag/${id}`).then((response) => response.data)

export const postUserModify = (id: number, payload: PostUserModifyPayload): Promise<PostUserModifyResponse> =>
    axiosRatingsBase.post(`user/modify/${id}`, payload).then((response) => response.data)

export const ratingKeys = {
    all: ["ratings"] as const,
    lists: () => [...ratingKeys.all, "list"] as const,
    list: (filters: string) => [...ratingKeys.lists(), { filters }] as const,
    details: () => [...ratingKeys.all, "detail"] as const,
    detail: (id: number) => [...ratingKeys.details(), id] as const,
    validates: () => [...ratingKeys.all, "validate"] as const,
    validate: (id: number) => [...ratingKeys.validates(), id] as const,
    checks: () => [...ratingKeys.all, "check"] as const,
    check: (id: number) => [...ratingKeys.checks(), id] as const
}

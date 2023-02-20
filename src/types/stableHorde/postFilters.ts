export interface PostFiltersRequest {
    prompt: string
    filter_type: number
}

export interface PostFiltersResponse {
    suspicion: number
    matches: string[]
}

export interface PostFiltersPayload {
    prompt: string,
    filter_type: number
}

export interface PostFilters {
    suspicion: number
    matches: string[]
}

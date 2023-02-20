export interface GetStatusPerformanceResponse {
    queued_requests: number
    worker_count: number
    queued_megapixelsteps: number
    past_minute_megapixelsteps: number
}

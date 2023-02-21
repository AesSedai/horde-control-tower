export interface DeleteGenerateStatusResponse {
    finished: number
    processing: number
    restarted: number
    waiting: number
    done: boolean
    faulted: boolean
    wait_time: number
    queue_position: number
    kudos: number
    is_possible: boolean
    generations: [
        {
            worker_id: string
            worker_name: string
            model: string
            state: string
            img: string
            seed: string
            id: string
            censored: boolean
        }
    ]
    shared: true
}

export interface DeleteGenerateStatusResponseErr {
    message: string
}

export interface GetUserResponse {
    username: string
    id: number
    kudos: number
    evaluating_kudos: number
    concurrency: number
    worker_invited: number
    moderator: boolean
    kudos_details: {
        accumulated: number
        gifted: number
        admin: number
        received: number
        recurring: number
        awarded: number
    }
    worker_count: number
    worker_ids?: string[]
    monthly_kudos: {
        amount: number
        last_received: string
    }
    trusted: boolean
    flagged: boolean
    suspicious: number
    pseudonymous: boolean
    contact: string
    account_age: number
    usage: {
        requests: number
        megapixelsteps: number
    }
    contributions: {
        fulfillments: number
        megapixelsteps: number
    }
}

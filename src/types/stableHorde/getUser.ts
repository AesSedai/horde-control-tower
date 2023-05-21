export interface GetUserResponse {
    account_age: number
    concurrency: number
    contributions: {
        fulfillments: number
        megapixelsteps: number
    }
    evaluating_kudos: number
    flagged: boolean
    id: number
    kudos: number
    kudos_details: {
        accumulated: number
        gifted: number
        admin: number
        received: number
        recurring: number
        awarded: number
    }
    moderator: boolean
    monthly_kudos: {
        amount: number
        last_received: string
    }
    pseudonymous: boolean
    records: {}
    sharedkey_ids: string[]
    suspicious: number
    trusted: boolean
    usage: {
        requests: number
        megapixelsteps: number
    }
    username: string
    worker_count: number
    worker_ids?: string[]
    worker_invited: number
    contact: string
}

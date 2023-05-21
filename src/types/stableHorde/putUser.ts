export type PutUserRequest = Partial<{
    kudos: number
    concurrency: number
    usage_multiplier: number
    worker_invite: number
    moderator: boolean
    public_workers: boolean
    username: string
    monthly_kudos: number
    trusted: boolean
    flagged: boolean
    reset_suspicion: boolean
    contact: string
    customizer: boolean
    vpn: boolean
}>

export interface GetWorker {
    name: string
    id: string
    requests_fulfilled: number
    kudos_rewards: number
    kudos_details: {
        generated: number
        uptime: number
    }
    performance: string
    uptime: number
    maintenance_mode: boolean
    paused: boolean
    info: string
    nsfw: boolean
    owner: string
    trusted: boolean
    suspicious: number
    max_pixels: number
    megapixelsteps_generated: number
}

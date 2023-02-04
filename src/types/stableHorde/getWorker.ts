export interface GetWorker {
    name: string
    id: string
    online: boolean
    requests_fulfilled: number
    kudos_rewards: number
    kudos_details: {
        generated: number
        uptime: number
    }
    performance: string
    threads: number
    uptime: number
    maintenance_mode: boolean
    paused: boolean
    info: string
    nsfw: boolean
    owner: string
    trusted: boolean
    flagged: boolean
    suspicious: number
    uncompleted_jobs: number
    models: string[]
    team: {
        name: string
        id: string
    }
    contact: string
    bridge_agent: string
    max_pixels: number
    megapixelsteps_generated: number
    img2img: boolean
    painting: boolean
    "post-processing": boolean
}

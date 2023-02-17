export type PostGenerateAsyncRequest = {
    prompt: string
    params: {
        sampler_name: string
        toggles: number[]
        cfg_scale: number
        denoising_strength: number
        seed: string
        height: number
        width: number
        seed_variation: number
        post_processing: string[]
        karras: boolean
        tiling: boolean
        hires_fix: boolean
        clip_skip: number
        steps: number
        n: number
    }
    nsfw: boolean
    trusted_workers: boolean
    censor_nsfw: boolean
    workers: string[]
    models: string[]
    source_image: string
    source_processing: string
    source_mask: string
    r2: boolean
    shared: boolean
}

export interface PostGenerateAsyncResponse {
    id?: string
    message: string
}

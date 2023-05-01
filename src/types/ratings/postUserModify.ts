export interface PostUserModifyPayload {
    validated?: boolean
    flagged?: boolean
}

export interface PostUserModifyResponse {
    message: string
}

export interface PostUserModifyErr {
    message: string
}

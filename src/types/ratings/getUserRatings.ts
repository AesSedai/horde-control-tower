export interface GetUserRatings {
    total: number
    ratings: Array<{
        username: string
        image: string
        image_id: string
        rating: number
        artifacts: number | null
        average: number
        times_rated: number
    }>
}

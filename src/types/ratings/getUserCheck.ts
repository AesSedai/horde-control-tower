export interface GetUserCheck {
    ratings_in_timeframe: number
    ratings_per_minute_in_timeframe: number
    ratings_past_three_hours: number
    ratings_per_minute_for_past_three_hours: number
    suspect_divergences: number
    captchas_failed: number
    ratings_breakdown: {
        "1"?: {
            cnt: number
            pct: number
        }
        "2"?: {
            cnt: number
            pct: number
        }
        "3"?: {
            cnt: number
            pct: number
        }
        "4"?: {
            cnt: number
            pct: number
        }
        "5"?: {
            cnt: number
            pct: number
        }
        "6"?: {
            cnt: number
            pct: number
        }
        "7"?: {
            cnt: number
            pct: number
        }
        "8"?: {
            cnt: number
            pct: number
        }
        "9"?: {
            cnt: number
            pct: number
        }
        "10"?: {
            cnt: number
            pct: number
        }
    }
    validated: boolean
}

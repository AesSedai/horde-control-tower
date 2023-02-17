import { GetUserResponse } from "../types/stableHorde/api"

export const isLikeGetUser = (val: any): val is GetUserResponse => {
    return val != null && "username" in val && "id" in val
}

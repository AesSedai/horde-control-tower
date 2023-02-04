import { GetUser } from "../types/stableHorde/getUser"

export const isLikeGetUser = (val: any): val is GetUser => {
    return val != null && "username" in val && "id" in val
}
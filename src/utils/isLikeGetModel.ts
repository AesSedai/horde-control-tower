import { GetModelResponse } from "../types/stableHorde/api"

export const isLikeGetModel = (val: any): val is GetModelResponse => {
    return val != null && "name" in val
}

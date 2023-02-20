import { isArray } from "lodash-es"
import { GetWorkerResponse } from "../types/stableHorde/api"

export const isLikeGetWorker = (val: any): val is GetWorkerResponse => {
    return val != null && "name" in val && "id" in val
}

export const isLikeGetWorkerArr = (val: any): val is GetWorkerResponse[] => {
    return val != null && isArray(val) && "name" in val[0] && "id" in val[0]
}

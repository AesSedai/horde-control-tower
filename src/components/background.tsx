import { useQuery } from "@tanstack/react-query"
import { getModels, getStatusMode, getStatusPerformance, getUsers, userKeys } from "../services/stableHorde"

export const BackgroundQueries = (): JSX.Element => {
    const users = useQuery(userKeys.all, getUsers, {
        staleTime: 1000 * 30,
        refetchInterval: 1000 * 30
    })
    const performance = useQuery(["performance"], getStatusPerformance, {
        staleTime: 1000 * 30,
        refetchInterval: 1000 * 30
    })
    const mode = useQuery(["mode"], getStatusMode, { staleTime: 1000 * 30, refetchInterval: 1000 * 30 })

    const models = useQuery(["models"], getModels, { staleTime: 1000 * 30, refetchInterval: 1000 * 30 })

    return <></>
}

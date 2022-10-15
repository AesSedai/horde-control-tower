import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getUsers, userKeys } from "../services/stableHorde"

export const BackgroundQueries = (): JSX.Element => {
    const queryClient = useQueryClient()
    const { data, isLoading, error } = useQuery(userKeys.all, getUsers, {
        onSuccess: (data) => {
            data.forEach((user) => {
                queryClient.setQueryData(userKeys.detail(user.id), user)
            })
        },
        staleTime: 1000 * 61
    })

    return <></>
}

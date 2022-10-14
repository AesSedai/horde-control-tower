import { stableHorde } from "../services/stableHorde"

export const BackgroundQueries = (): JSX.Element => {
    const { data, isLoading, error } = stableHorde.useGetUsersQuery()

    return <></>
}

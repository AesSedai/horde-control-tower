import { useQuery } from "@tanstack/react-query"
import { getUser, userKeys } from "../../services/stableHorde"
import { UserTable } from "./userTable"

interface Props {
    userId: number
}

export const UserWrapper = (props: Props): JSX.Element => {
    const { userId } = props

    const { data } = useQuery(userKeys.detail(userId), () => getUser(userId), { staleTime: 1000 * 61 })

    if (data == null) {
        return <></>
    }

    console.log("data", data)

    return <UserTable user={data} />
}

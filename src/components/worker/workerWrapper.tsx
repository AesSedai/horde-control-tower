import { useQuery } from "@tanstack/react-query"
import { getWorker, workerKeys } from "../../services/stableHorde"
import { WorkerTable } from "./workerTable"

interface Props {
    workerId: string
}

export const WorkerWrapper = (props: Props): JSX.Element => {
    const { workerId } = props

    const { data } = useQuery(workerKeys.detail(workerId), () => getWorker(workerId), { staleTime: 1000 * 61 })

    console.log("worker data", data)

    if (data == null) {
        return <></>
    }

    return <WorkerTable worker={data} />
}

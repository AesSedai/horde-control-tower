import { useQuery } from "@tanstack/react-query"
import { getWorker, workerKeys } from "../../services/stableHorde"
import { WorkerCard } from "./workerCard"

interface Props {
    workerId: string
}

export const WorkerWrapper = (props: Props): JSX.Element => {
    const { workerId } = props

    const { data } = useQuery(workerKeys.detail(workerId), () => getWorker(workerId), {
        staleTime: 1000 * 61,
        select: (worker) => {
            // sort the data, strip MPS from name
            return { ...worker, performance: worker.performance.replace(" megapixelsteps per second", "") }
        }
    })

    if (data == null) {
        return <></>
    }

    return <WorkerCard worker={data} />
}

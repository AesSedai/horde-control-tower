import { isEmpty } from "lodash-es"
import { useAppSelector } from "../../../redux/store/hooks"
import { GenerateRequest } from "./generateRequest"

export const GenerateQueue = (): JSX.Element => {
    const requests = useAppSelector((state) => state.persist.imageGens)

    if (isEmpty(requests)) {
        return <></>
    }

    return (
        <>
            {requests.map((request) => (
                <GenerateRequest key={request.id} gen={request} />
            ))}
        </>
    )
}

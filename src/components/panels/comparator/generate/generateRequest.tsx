import { useQuery } from "@tanstack/react-query"
import { getGenerateCheck, getGenerateStatus } from "../../../../services/stableHorde"
import { urlToBase64 } from "../../../../utils/urlToBase64"
import { ImageGen, updateImageGen } from "../../../redux/slices/persistState"
import { useAppDispatch } from "../../../redux/store/hooks"

export interface GenerateRequestProps {
    gen: ImageGen
}

export const GenerateRequest = (props: GenerateRequestProps): JSX.Element => {
    const { gen, ...other } = props

    const dispatch = useAppDispatch()

    const check = useQuery(["check", gen.id], () => getGenerateCheck(gen.id), {
        refetchInterval: 5000,
        enabled: gen.state === "check",
        onSuccess: (data) => {
            if (gen.state === "check") {
                let newState = gen.state as ImageGen["state"]
                if (data.faulted) {
                    newState = "error"
                } else if (data.done) {
                    newState = "status"
                }
                dispatch(
                    updateImageGen({
                        ...gen,
                        state: newState,
                        check: data
                    })
                )
            }
        }
    })

    const status = useQuery(["status", gen.id], () => getGenerateStatus(gen.id), {
        refetchInterval: 5000,
        enabled: gen.state === "status",
        onSuccess: async (data) => {
            if (gen.state === "status") {
                let newState = gen.state as ImageGen["state"]
                if (data.faulted) {
                    newState = "error"
                } else if (data.done) {
                    newState = "complete"
                    const b64 = await urlToBase64(data.generations[0].img)
                    data.generations[0].img = b64
                }
                dispatch(
                    updateImageGen({
                        ...gen,
                        state: newState,
                        status: data
                    })
                )
            }
        }
    })

    return <></>
}

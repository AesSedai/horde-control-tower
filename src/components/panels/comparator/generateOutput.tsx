import { Box, CircularProgress, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { fromPairs } from "lodash-es"
import { getWorkers, workerKeys } from "../../../services/stableHorde"
import { ImageGen } from "../../redux/slices/persistState"
import { useAppSelector } from "../../redux/store/hooks"

export const GenerateOutput = (): JSX.Element => {
    const imageGens = useAppSelector((state) => state.persist.imageGens)

    const { data: workers } = useQuery(workerKeys.all, () => getWorkers(), {
        refetchInterval: 1000 * 30,
        select: (data) => {
            return fromPairs(data.map((worker) => [worker.id, worker.name]))
        }
    })

    const genStatus = (gen: ImageGen): JSX.Element => {
        const state = gen.status != null ? gen.status : gen.check
        if (gen.state !== "complete" && state != null) {
            return (
                <ImageListItem key={gen.id} sx={{ paddingTop: "100%", border: "1px solid black" }}>
                    <CircularProgress
                        sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                    />
                    <ImageListItemBar
                        title={workers == null ? "" : workers[gen.payload.workers[0] ?? ""]}
                        subtitle={`Position: ${state.queue_position}, wait time: ${state.wait_time}`}
                    />
                </ImageListItem>
            )
        } else if (gen.state === "complete") {
            if (genHasImage(gen).length === 0) {
                return (
                    <ImageListItem key={gen.id} sx={{ paddingTop: "100%", border: "1px solid black" }}>
                        <Typography
                            variant="h3"
                            sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                            Canceled
                        </Typography>
                        <ImageListItemBar title={workers == null ? "" : workers[gen.payload.workers[0] ?? ""]} />
                    </ImageListItem>
                )
            } else {
                return (
                    <ImageListItem
                        sx={{ paddingTop: genHasImage(gen).length > 0 ? "0%" : "100%", border: "1px solid black" }}>
                        <img src={genHasImage(gen)} />
                        <ImageListItemBar title={workers == null ? "" : workers[gen.payload.workers[0] ?? ""]} />
                    </ImageListItem>
                )
            }
        }
        return <></>
    }

    const genHasImage = (gen: ImageGen): string => {
        if (gen.status != null && gen.status.generations.length > 0) {
            return gen.status.generations[0].img
        }
        return ""
    }

    return (
        <Box>
            <ImageList sx={{ width: "100%", height: "100%" }} cols={4}>
                {imageGens.map((gen) => genStatus(gen))}
            </ImageList>
        </Box>
    )
}

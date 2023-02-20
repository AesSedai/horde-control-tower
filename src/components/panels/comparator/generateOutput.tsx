import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { fromPairs } from "lodash-es"
import { getWorkers, workerKeys } from "../../../services/stableHorde"
import { useAppSelector } from "../../redux/store/hooks"

export const GenerateOutput = (): JSX.Element => {
    const imageGens = useAppSelector((state) => state.persist.imageGens)

    const { data: workers } = useQuery(workerKeys.all, () => getWorkers(), {
        refetchInterval: 1000 * 30,
        select: (data) => {
            // sort the data
            return fromPairs(data.map((worker) => [worker.id, worker.name]))
        }
    })

    return (
        <Box>
            <ImageList sx={{ width: "100%", height: "100%" }} cols={4}>
                {imageGens.map((gen) => (
                    <ImageListItem key={gen.id}>
                        <img
                            src={
                                gen.status != null && gen.status.generations.length > 0
                                    ? gen.status.generations[0].img
                                    : ""
                            }
                        />
                        <ImageListItemBar
                            title={workers == null ? "" : workers[gen.payload.workers[0] ?? ""]}
                            // subtitle={<span>by: {item.author}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

import CircleIcon from "@mui/icons-material/Circle"
import { Box, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getStatusMode } from "../services/stableHorde"

export const HordeStatus = (): JSX.Element => {
    const { data, isLoading, error } = useQuery(["mode"], getStatusMode, { staleTime: 1000 * 61 })

    if (isLoading) {
        return <Typography variant="h6">Loading Horde status ...</Typography>
    }

    if (data == null || error) {
        console.log("HordeStatus error", error)
        return <Typography variant="h6">Error loading Horde status</Typography>
    }

    const getCircle = (val: boolean): JSX.Element => {
        if (val) {
            return <CircleIcon sx={{ color: "red", ml: 1 }} />
        } else {
            return <CircleIcon sx={{ color: "green", ml: 1 }} />
        }
    }

    return (
        <Box sx={{ display: "flex" }}>
            <Typography variant="h6" pr={2} display="flex" alignItems="center">
                Maintenance {getCircle(data.maintenance_mode)}{" "}
            </Typography>
            <Typography variant="h6" pr={2} display="flex" alignItems="center">
                Invite Only {getCircle(data.invite_only_mode)}{" "}
            </Typography>
            {data.raid_mode != null ? (
                <Typography variant="h6" pr={2} display="flex" alignItems="center">
                    Raid {getCircle(data.raid_mode)}
                </Typography>
            ) : null}
        </Box>
    )
}

import CircleIcon from "@mui/icons-material/Circle"
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getStatusMode } from "../../services/stableHorde"
import { bad, good } from "../../utils/colors"

export const HordeStatus = (): JSX.Element => {
    const { data, isLoading, error } = useQuery(["mode"], getStatusMode)

    if (isLoading) {
        return <Typography variant="h6">Loading Horde status ...</Typography>
    }

    if (data == null || error) {
        console.log("HordeStatus error", error)
        return <Typography variant="h6">Error loading Horde status</Typography>
    }

    const getCircle = (val: boolean): JSX.Element => {
        if (val) {
            return <CircleIcon sx={{ color: bad, ml: 1 }} />
        } else {
            return <CircleIcon sx={{ color: good, ml: 1 }} />
        }
    }

    return (
        <List>
            <ListItem>
                <ListItemIcon>{getCircle(data.maintenance_mode)}</ListItemIcon>
                <ListItemText primary={"Maintenance"} />
            </ListItem>
            <ListItem>
                <ListItemIcon>{getCircle(data.invite_only_mode)}</ListItemIcon>
                <ListItemText primary={"Invite Only"} />
            </ListItem>
            {data.raid_mode != null ? (
                <ListItem>
                    <ListItemIcon>{getCircle(data.raid_mode)}</ListItemIcon>
                    <ListItemText primary={"Raid"} />
                </ListItem>
            ) : null}
        </List>
    )
}

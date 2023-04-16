import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material"
import React from "react"
import { setExpandedPanel } from "../../redux/slices/userPanelState"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import { WorkerBox } from "../workers/worker/workerBox"
import { UserLookup } from "./user/userLookup"
import { UserRatings } from "./user/userRatings"

export const UserPanel = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const userId = useAppSelector((state) => state.userPanel.selectedUser)
    const expandedPanel = useAppSelector((state) => state.userPanel.expandedPanel)

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        if (panel === "workers" || panel === "ratings") {
            dispatch(setExpandedPanel(isExpanded ? panel : false))
        }
    }

    return (
        <Grid container spacing={2}>
            <Grid item md={12} lg={6} xl={4}>
                <UserLookup />
            </Grid>
            <Grid item md={12} lg={12} xl={12}>
                <Box>
                    <Accordion
                        expanded={expandedPanel === "workers"}
                        onChange={handleChange("workers")}
                        sx={{ boxShadow: "none" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header">
                            <Typography sx={{ width: "33%", flexShrink: 0 }}>Workers</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: "background.default" }}>
                            <Grid container spacing={2}>
                                {userId != null ? <WorkerBox userId={userId}></WorkerBox> : null}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expandedPanel === "ratings"}
                        onChange={handleChange("ratings")}
                        sx={{ boxShadow: "none" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header">
                            <Typography sx={{ width: "33%", flexShrink: 0 }}>Ratings</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: "background.default" }}>
                            {expandedPanel === "ratings" && userId != null ? <UserRatings userId={userId} /> : null}
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Grid>
        </Grid>
    )
}

import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react"
import { SettingsPanel } from "./panels/settingsPanel"
import { UserPanel } from "./panels/userPanel"
import { UtilitiesPanel } from "./panels/utilitiesPanel"
import { WorkersPanel } from "./panels/workersPanel"
import { Sidebar } from "./sidebar/sidebar"

const tabItems = {
    "1": <UserPanel />,
    "2": <WorkersPanel />,
    "3": <UtilitiesPanel />,
    "4": <SettingsPanel />
}

export const Layout = (): JSX.Element => {
    const [tab, setTab] = useState<keyof typeof tabItems>("2")

    const handleChange = (event: React.SyntheticEvent, newTab: keyof typeof tabItems) => {
        setTab(newTab)
    }

    return (
        <Box display="flex">
            <Sidebar />
            <Box display="flex" flexDirection="column" flex="1 1 auto">
                <TabContext value={tab}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="User Lookup" value="1" />
                            <Tab label="Workers" value="2" />
                            <Tab label="Utilities" value="3" />
                            <Tab label="Settings" value="4" />
                        </TabList>
                    </Box>
                    {/* This is a bad hack to keep tabs from unmounting on switch */}
                    <TabPanel value={tab}>
                        {Object.entries(tabItems).map(([key, component]) => {
                            return <div key={key} style={{ display: key === tab ? "block" : "none" }}>{component}</div>
                        })}
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

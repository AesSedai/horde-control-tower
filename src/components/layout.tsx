import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { SettingsPanel } from "./panels/settingsPanel"
import { UserPanel } from "./panels/userPanel"
import { UtilitiesPanel } from "./panels/utilitiesPanel"
import { WorkersPanel } from "./panels/workersPanel"
import { setSelectedTab } from "./redux/slices/persistState"
import { setShowPassword } from "./redux/slices/settingsPanelState"
import { useAppDispatch, useAppSelector } from "./redux/store/hooks"
import { Sidebar } from "./sidebar/sidebar"

export const Layout = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const tab = useAppSelector((state) => state.persist.selectedTab)

    const handleChange = (event: React.SyntheticEvent, newTab: string) => {
        if (newTab != "4") {
            dispatch(setShowPassword(false))
        }
        dispatch(setSelectedTab(newTab))
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
                    <TabPanel value={"1"}>
                        <UserPanel />
                    </TabPanel>
                    <TabPanel value={"2"}>
                        <WorkersPanel />
                    </TabPanel>
                    <TabPanel value={"3"}>
                        <UtilitiesPanel />
                    </TabPanel>
                    <TabPanel value={"4"}>
                        <SettingsPanel />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
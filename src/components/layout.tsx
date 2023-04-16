import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { AboutPanel } from "./panels/about/about"
import { ComparatorPanel } from "./panels/comparator/comparatorPanel"
import { RatingsPanel } from "./panels/ratings/ratings"
import { SettingsPanel } from "./panels/settings/settingsPanel"
import { UserPanel } from "./panels/user/userPanel"
import { UtilitiesPanel } from "./panels/utilities/utilitiesPanel"
import { WorkersPanel } from "./panels/workers/workersPanel"
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
                            <Tab label="Comparator" value="3" />
                            <Tab label="Ratings" value="4" />
                            <Tab label="Utilities" value="5" />
                            <Tab label="Settings" value="6" />
                            <Tab label="About" value="7" />
                        </TabList>
                    </Box>
                    <TabPanel value={"1"}>
                        <UserPanel />
                    </TabPanel>
                    <TabPanel value={"2"}>
                        <WorkersPanel />
                    </TabPanel>
                    <TabPanel value={"3"}>
                        <ComparatorPanel />
                    </TabPanel>
                    <TabPanel value={"4"}>
                        <RatingsPanel />
                    </TabPanel>
                    <TabPanel value={"5"}>
                        <UtilitiesPanel />
                    </TabPanel>
                    <TabPanel value={"6"}>
                        <SettingsPanel />
                    </TabPanel>
                    <TabPanel value={"7"}>
                        <AboutPanel />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

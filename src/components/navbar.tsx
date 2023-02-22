import MenuIcon from "@mui/icons-material/Menu"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { setSidebarOpen } from "./redux/slices/localState"
import { resetExceptApiKey } from "./redux/slices/persistState"
import { useAppDispatch, useAppSelector } from "./redux/store/hooks"

export const Navbar = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const sidebarOpen = useAppSelector((state) => state.localState.sidebarOpen)

    const handleDrawerToggle = () => {
        dispatch(setSidebarOpen(!sidebarOpen))
    }

    const onResetClick = () => {
        dispatch(resetExceptApiKey())
    }

    return (
        <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: "none" } }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    Horde Control Tower
                </Typography>
                {import.meta.env.DEV ? <Button onClick={onResetClick}>Reset</Button> : null}
            </Toolbar>
        </AppBar>
    )
}

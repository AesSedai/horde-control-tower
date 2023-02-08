import { AppBar, Toolbar, Typography } from "@mui/material"

export const Navbar = (): JSX.Element => {
    return (
        <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                    Horde Control Tower
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

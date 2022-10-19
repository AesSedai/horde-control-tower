import { alpha, AppBar, InputBase, styled, Toolbar, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { isEmpty } from "radash"
import { getFindUser } from "../services/stableHorde"
import { setKey } from "../slices/persist"
import { useAppDispatch, useAppSelector } from "../store/hooks"

const Wrapper = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "auto"
    }
}))

type DivProps = {
    apikey: string | undefined
}

// only blur the input when an API key is provided
const StyledInputBase = styled(InputBase)<DivProps>(({ theme, apikey }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create("width"),
        width: "100%",
        filter: (apikey ?? "").length > 0 ? "blur(2px)" : "none",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch"
            }
        },
        "&:focus": {
            filter: "none"
        }
    }
}))

export const Navbar = (): JSX.Element => {
    const apiKey = useAppSelector((state) => state.persist.apikey)
    const dispatch = useAppDispatch()

    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        dispatch(setKey(event.target.value))
    }

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
                <Wrapper>
                    <StyledInputBase defaultValue={apiKey} placeholder="API Key" onBlur={onBlur} apikey={apiKey} />
                </Wrapper>
            </Toolbar>
        </AppBar>
    )
}

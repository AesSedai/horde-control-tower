import { Visibility, VisibilityOff } from "@mui/icons-material"
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material"
import { setKey } from "../redux/slices/persistState"
import { setShowPassword } from "../redux/slices/settingsPanelState"
import { useAppDispatch, useAppSelector } from "../redux/store/hooks"

export const ApiInput = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const apiKey = useAppSelector((state) => state.persist.apikey)
    const showPassword = useAppSelector((state) => state.settingsPanel.showPassword)

    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        dispatch(setKey(event.target.value))
        dispatch(setShowPassword(false))
    }

    return (
        <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
            <InputLabel>API Key</InputLabel>
            <Input
                defaultValue={apiKey}
                onBlur={onBlur}
                type={showPassword ? "text" : "password"}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={() => dispatch(setShowPassword(!showPassword))}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

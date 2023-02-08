import { Visibility, VisibilityOff } from "@mui/icons-material"
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material"
import { useState } from "react"
import { setKey } from "../../slices/persist"
import { useAppDispatch, useAppSelector } from "../../store/hooks"

export const ApiInput = (): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false)

    const apiKey = useAppSelector((state) => state.persist.apikey)
    const dispatch = useAppDispatch()

    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        dispatch(setKey(event.target.value))
        setShowPassword(false)
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
                        <IconButton onClick={() => setShowPassword((show) => !show)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    FormControl,
    MenuItem,
    Select,
    Slider,
    TextField,
    Typography
} from "@mui/material"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { PostGenerateAsyncRequest } from "../../../types/stableHorde/api"
import { postProcessors } from "../../../utils/postProcessing"
import { samplers } from "../../../utils/samplers"
import { setGenForm } from "../../redux/slices/comparatorPanelState"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"

const width = "175px"

export const GenForm = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const selectedWorkers = useAppSelector((state) => state.comparatorPanel.selectedWorkers)
    const selectedModel = useAppSelector((state) => state.comparatorPanel.selectedModel)
    const genForm = useAppSelector((state) => state.comparatorPanel.genForm)

    const {
        handleSubmit,
        control,
        formState: { errors },
        watch,
        reset
    } = useForm<PostGenerateAsyncRequest>({
        defaultValues: genForm
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            dispatch(setGenForm(JSON.parse(JSON.stringify(value)) as PostGenerateAsyncRequest))
        })
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <Box sx={{ width: "50%", maxWidth: "50%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Prompt
                    </Typography>

                    <Controller
                        name="prompt"
                        control={control}
                        render={({ field }) => (
                            <TextField fullWidth required multiline placeholder="Enter prompt here" {...field} />
                        )}
                    />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Seed
                    </Typography>

                    <Controller
                        name="params.seed"
                        control={control}
                        render={({ field }) => <TextField fullWidth placeholder="Seed" {...field} />}
                    />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Sampler
                    </Typography>
                    <FormControl fullWidth>
                        <Controller
                            name="params.sampler_name"
                            control={control}
                            render={({ field }) => (
                                <Select {...field}>
                                    {samplers.map((sampler) => (
                                        <MenuItem key={sampler} value={sampler}>
                                            {sampler}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Steps
                    </Typography>

                    <Controller
                        name="params.steps"
                        control={control}
                        render={({ field }) => (
                            <Slider valueLabelDisplay="auto" marks step={1} min={1} max={50} {...field} />
                        )}
                    />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Width
                    </Typography>

                    <Controller
                        name="params.width"
                        control={control}
                        render={({ field }) => (
                            <Slider valueLabelDisplay="auto" marks step={64} min={64} max={1024} {...field} />
                        )}
                    />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Height
                    </Typography>
                    <Controller
                        name="params.height"
                        control={control}
                        render={({ field }) => (
                            <Slider valueLabelDisplay="auto" marks step={64} min={64} max={1024} {...field} />
                        )}
                    />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        CFG
                    </Typography>
                    <Controller
                        name="params.cfg_scale"
                        control={control}
                        render={({ field }) => (
                            <Slider valueLabelDisplay="auto" marks step={1} min={1} max={24} {...field} />
                        )}
                    />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Post-Processors
                    </Typography>
                    <Controller
                        name="params.post_processing"
                        control={control}
                        render={({ field: { onChange, onBlur, value, name, ref } }) => (
                            <Autocomplete
                                fullWidth
                                multiple
                                onBlur={onBlur}
                                ref={ref}
                                value={value}
                                onChange={(e, v) => {
                                    onChange(v)
                                }}
                                options={postProcessors}
                                getOptionLabel={(option) => option}
                                renderInput={(params) => (
                                    // @ts-expect-error blah
                                    <TextField {...params} />
                                )}
                            />
                        )}
                    />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Karras
                    </Typography>
                    <Controller
                        name="params.karras"
                        control={control}
                        render={({ field }) => <Checkbox {...field} checked={field.value} />}
                    />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Tiling
                    </Typography>
                    <Controller
                        name="params.tiling"
                        control={control}
                        render={({ field }) => <Checkbox {...field} checked={field.value} />}
                    />
                </Box>

                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    )
}

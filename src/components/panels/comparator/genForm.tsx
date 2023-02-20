import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    FormControl,
    Grid,
    Input,
    MenuItem,
    Select,
    Slider,
    TextField,
    Typography
} from "@mui/material"
import { debounce } from "lodash-es"
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
        watch
    } = useForm<PostGenerateAsyncRequest>({
        defaultValues: genForm
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    useEffect(() => {
        const subscription = watch(
            debounce((value, { name, type }) => {
                dispatch(setGenForm(value))
            }, 300)
        )
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <Box>
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
                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.steps"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <Slider valueLabelDisplay="auto" marks step={1} min={1} max={100} {...field} />
                                </Grid>
                            )}
                        />
                        <Controller
                            name="params.steps"
                            control={control}
                            render={({ field }) => (
                                <Grid item>
                                    <Input
                                        type="number"
                                        sx={{ width: "60px", ml: 1 }}
                                        inputProps={{
                                            step: 1,
                                            min: 1,
                                            max: 100,
                                            type: "number"
                                        }}
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(parseInt(e.target.value))
                                        }}
                                    />
                                </Grid>
                            )}
                        />
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Width
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.width"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <Slider valueLabelDisplay="auto" marks step={64} min={64} max={1024} {...field} />
                                </Grid>
                            )}
                        />
                        <Controller
                            name="params.width"
                            control={control}
                            render={({ field }) => (
                                <Grid item>
                                    <Input
                                        type="number"
                                        sx={{ width: "60px", ml: 1 }}
                                        inputProps={{
                                            step: 64,
                                            min: 64,
                                            max: 1024,
                                            type: "number"
                                        }}
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(parseInt(e.target.value))
                                        }}
                                    />
                                </Grid>
                            )}
                        />
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Height
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.height"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <Slider valueLabelDisplay="auto" marks step={64} min={64} max={1024} {...field} />
                                </Grid>
                            )}
                        />
                        <Controller
                            name="params.height"
                            control={control}
                            render={({ field }) => (
                                <Grid item>
                                    <Input
                                        type="number"
                                        sx={{ width: "60px", ml: 1 }}
                                        inputProps={{
                                            step: 64,
                                            min: 64,
                                            max: 1024,
                                            type: "number"
                                        }}
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(parseInt(e.target.value))
                                        }}
                                    />
                                </Grid>
                            )}
                        />
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        CFG
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.cfg_scale"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <Slider valueLabelDisplay="auto" marks step={1} min={1} max={24} {...field} />
                                </Grid>
                            )}
                        />
                        <Controller
                            name="params.cfg_scale"
                            control={control}
                            render={({ field }) => (
                                <Grid item>
                                    <Input
                                        type="number"
                                        sx={{ width: "60px", ml: 1 }}
                                        inputProps={{
                                            step: 1,
                                            min: 1,
                                            max: 24,
                                            type: "number"
                                        }}
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(parseInt(e.target.value))
                                        }}
                                    />
                                </Grid>
                            )}
                        />
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Clip Skip
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.clip_skip"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <Slider valueLabelDisplay="auto" marks step={1} min={1} max={12} {...field} />
                                </Grid>
                            )}
                        />
                        <Controller
                            name="params.clip_skip"
                            control={control}
                            render={({ field }) => (
                                <Grid item>
                                    <Input
                                        type="number"
                                        sx={{ width: "60px", ml: 1 }}
                                        inputProps={{
                                            step: 1,
                                            min: 1,
                                            max: 12,
                                            type: "number"
                                        }}
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(parseInt(e.target.value))
                                        }}
                                    />
                                </Grid>
                            )}
                        />
                    </Grid>
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
                        High Res Fix
                    </Typography>
                    <Controller
                        name="params.hires_fix"
                        control={control}
                        render={({ field }) => <Checkbox {...field} checked={field.value} />}
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
                    Generate
                </Button>
            </form>
        </Box>
    )
}

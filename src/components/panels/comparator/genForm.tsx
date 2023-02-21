import CasinoIcon from "@mui/icons-material/Casino"
import { LoadingButton } from "@mui/lab"
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    Grid,
    IconButton,
    Input,
    MenuItem,
    Select,
    Slider,
    TextField,
    Typography
} from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { debounce, random } from "lodash-es"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { postGenerateAsync } from "../../../services/stableHorde"
import { PostGenerateAsyncRequest, PostGenerateAsyncResponse } from "../../../types/stableHorde/api"
import { PostGenerateAsyncResponseErr } from "../../../types/stableHorde/postGenerateAsync"
import { postProcessors } from "../../../utils/postProcessing"
import { samplers } from "../../../utils/samplers"
import { setGenForm } from "../../redux/slices/comparatorPanelState"
import { addImageGen, resetImageGens, updateImageGen } from "../../redux/slices/persistState"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"

const width = "175px"

export const GenForm = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const selectedWorkers = useAppSelector((state) => state.comparatorPanel.selectedWorkers)
    const selectedModel = useAppSelector((state) => state.comparatorPanel.selectedModel)
    const genForm = useAppSelector((state) => state.comparatorPanel.genForm)
    const imaegGens = useAppSelector((state) => state.persist.imageGens)
    const hasOutput = useAppSelector((state) => state.persist.imageGens.length > 0)
    const isGenerating = useAppSelector((state) =>
        state.persist.imageGens.some((gen) => ["pending", "check"].includes(gen.state))
    )

    const { mutate } = useMutation<
        PostGenerateAsyncResponse,
        PostGenerateAsyncResponseErr,
        PostGenerateAsyncRequest,
        any
    >({
        mutationFn: postGenerateAsync,
        onSuccess: (data, variables, context) => {
            dispatch(
                addImageGen({
                    id: data.id,
                    payload: variables,
                    state: "check",
                    check: null,
                    status: null
                })
            )
        }
    })

    const {
        handleSubmit,
        control,
        formState: { errors },
        watch,
        setValue
    } = useForm<PostGenerateAsyncRequest>({
        defaultValues: genForm
    })

    const onSubmit = (data: PostGenerateAsyncRequest) => {
        if (selectedModel != null && selectedWorkers.length > 0) {
            dispatch(resetImageGens())

            selectedWorkers.forEach((worker) => {
                const params = {
                    ...data,
                    workers: [worker.id],
                    models: [selectedModel.name]
                }
                mutate(params)
            })
        }
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

                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="prompt"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <TextField
                                        fullWidth
                                        required
                                        multiline
                                        placeholder="Enter prompt here"
                                        {...field}
                                    />
                                </Grid>
                            )}
                        />
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Seed
                    </Typography>

                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.seed"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <TextField fullWidth placeholder="Seed" {...field} />
                                </Grid>
                            )}
                        />

                        <Grid item>
                            <IconButton
                                aria-label="randomize seed"
                                onClick={() => {
                                    setValue("params.seed", random(100000000, 999999999).toString())
                                }}>
                                <CasinoIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Sampler
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.sampler_name"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <Select {...field} fullWidth>
                                        {samplers.map((sampler) => (
                                            <MenuItem key={sampler} value={sampler}>
                                                {sampler}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            )}
                        />
                    </Grid>
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
                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.post_processing"
                            control={control}
                            render={({ field: { onChange, onBlur, value, name, ref } }) => (
                                <Grid item xs>
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
                                </Grid>
                            )}
                        />
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        High Res Fix
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.hires_fix"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <Checkbox {...field} checked={field.value} />
                                </Grid>
                            )}
                        />
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Karras
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.karras"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <Checkbox {...field} checked={field.value} />
                                </Grid>
                            )}
                        />
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <Typography variant="body1" sx={{ width: width }}>
                        Tiling
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Controller
                            name="params.tiling"
                            control={control}
                            render={({ field }) => (
                                <Grid item xs>
                                    <Checkbox {...field} checked={field.value} />
                                </Grid>
                            )}
                        />
                    </Grid>
                </Box>

                <LoadingButton type="submit" loading={isGenerating} variant="contained">
                    Submit
                </LoadingButton>
                {isGenerating ? (
                    <Button
                        sx={{ ml: 2 }}
                        color="error"
                        variant="contained"
                        onClick={() => {
                            imaegGens
                                .filter((gen) => ["pending", "check"].includes(gen.state))
                                .forEach((gen) => {
                                    dispatch(
                                        updateImageGen({
                                            ...gen,
                                            state: "delete"
                                        })
                                    )
                                })
                        }}>
                        Cancel
                    </Button>
                ) : null}
                {hasOutput ? (
                    <Button
                        sx={{ ml: 2 }}
                        variant="contained"
                        onClick={() => {
                            dispatch(resetImageGens())
                        }}>
                        Clear Output
                    </Button>
                ) : null}
            </form>
        </Box>
    )
}

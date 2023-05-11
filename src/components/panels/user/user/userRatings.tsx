import { Box, CircularProgress, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { List } from "ts-toolbelt"
import { getUserValidate, ratingKeys } from "../../../../services/ratings"
import { GetUserRatings } from "../../../../types/ratings/api"

interface Props {
    userId: number
}

export const UserRatings = (props: Props): JSX.Element => {
    const queryClient = useQueryClient()
    const { userId } = props
    const [open, setOpen] = useState(false)
    const [hasError, setHasError] = useState(false)

    const { data, isInitialLoading, isLoading, isError } = useQuery(
        ratingKeys.validate(userId),
        () => getUserValidate(userId),
        {
            enabled: !hasError,
            onError: (error) => setHasError(true),
            refetchInterval: 1000 * 15
        }
    )

    const renderTitle = (rating: List.UnionOf<GetUserRatings["ratings"]>): JSX.Element => {
        return (
            <Box sx={{ display: "flex" }}>
                <Typography>
                    r: {rating.rating}, a: {rating.artifacts}, avg: {rating.average}, n: {rating.times_rated}
                </Typography>
            </Box>
        )
    }

    if (isLoading) {
        return (
            <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
                <Box sx={{ display: "flex", flex: "1 1 auto" }} justifyContent="center" alignItems="center">
                    <CircularProgress />
                </Box>
            </Box>
        )
    }

    if (isError) {
        return <Typography>User has no ratings.</Typography>
    }

    if (data == null) {
        return <></>
    }

    return (
        <Box>
            <ImageList sx={{ width: "100%", height: "100%" }} cols={6} variant="masonry">
                {data.ratings.map((rating) => (
                    <ImageListItem key={rating.image_id}>
                        <img src={rating.image} />
                        <ImageListItemBar title={renderTitle(rating)} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

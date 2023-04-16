import { Box, CircularProgress, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { last } from "lodash-es"
import { List } from "ts-toolbelt"
import { getUserRatings } from "../../../services/ratings"
import { GetUserRatings } from "../../../types/ratings/api"
import { setSelectedTab } from "../../redux/slices/persistState"
import { setUser } from "../../redux/slices/userPanelState"
import { useAppDispatch } from "../../redux/store/hooks"

export const RatingsPanel = (): JSX.Element => {
    const { data, isLoading } = useQuery(["user/ratings"], () => getUserRatings())
    const dispatch = useAppDispatch()

    if (isLoading) {
        return (
            <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
                <Box sx={{ display: "flex", flex: "1 1 auto" }} justifyContent="center" alignItems="center">
                    <CircularProgress />
                </Box>
            </Box>
        )
    }

    const lookupUser = (rating: List.UnionOf<GetUserRatings["ratings"]>) => {
        const userId = last(rating.username.split("#"))
        if (userId != null) {
            dispatch(setUser(parseInt(userId)))
            // tab 1 is user lookup
            dispatch(setSelectedTab("1"))
        }
    }

    const renderTitle = (rating: List.UnionOf<GetUserRatings["ratings"]>): JSX.Element => {
        return (
            <Box sx={{ display: "flex" }}>
                <Typography sx={{textDecoration: 'underline'}} onClick={() => lookupUser(rating)}>{rating.username}</Typography>
                <Typography>
                    &nbsp;- r: {rating.rating}, a: {rating.artifacts}, avg: {rating.average}, n: {rating.times_rated}
                </Typography>
            </Box>
        )
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

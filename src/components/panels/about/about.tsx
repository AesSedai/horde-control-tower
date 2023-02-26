import { Box, Link, Paper, Typography } from "@mui/material"

export const AboutPanel = (): JSX.Element => {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Paper elevation={1} sx={{ p: 2, height: "100%", minWidth: "400px" }}>
                <Box>
                    <Typography variant="h4" textAlign="center">
                        About
                    </Typography>
                    <Typography variant="body1">
                        Horde Control Tower is an open source{" "}
                        <Link href="https://aihorde.net/" target="_blank" rel="noreferrer">
                            AI Horde
                        </Link>{" "}
                        moderation utility developed by AesSedai (Aes Sedai#5565).
                    </Typography>
                    <Typography variant="body1">
                        The project source is available on{" "}
                        <Link href="https://github.com/AesSedai/horde-control-tower" target="_blank" rel="noreferrer">
                            Github
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

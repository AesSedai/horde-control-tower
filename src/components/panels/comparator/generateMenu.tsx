import MoreVertIcon from "@mui/icons-material/MoreVert"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
    TextField
} from "@mui/material"
import React, { useState } from "react"
import { PostGenerateAsyncRequest } from "../../../types/stableHorde/postGenerateAsync"
import { setGenForm, setReload } from "../../redux/slices/comparatorPanelState"
import { addGenFavorite, deleteGenFavorite, updateGenFavorite } from "../../redux/slices/persistState"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"

export const GenerateMenu = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const genForm = useAppSelector((state) => state.comparatorPanel.genForm)
    const genFavorites = useAppSelector((state) => state.persist.genFavorites)

    const [overwriteDialogOpen, setOverwriteDialogOpen] = useState(false)
    const [overwriteIdx, setOverwriteIdx] = useState(-1)

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [deleteIdx, setDeleteIdx] = useState(-1)

    const [addDialogOpen, setAddDialogOpen] = useState(false)
    const [name, setName] = useState("")

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const menuOpen = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleAddDialogClose = () => {
        setAddDialogOpen(false)
    }

    const handleAddDialogCreate = () => {
        dispatch(addGenFavorite({ name: name, form: genForm }))
        setName("")
        setAddDialogOpen(false)
    }

    const handleOverwriteDialogClose = () => {
        setOverwriteIdx(-1)
        setOverwriteDialogOpen(false)
    }

    const handleOverwriteDialogSelect = () => {
        dispatch(updateGenFavorite({ idx: overwriteIdx, form: genForm }))
        setOverwriteIdx(-1)
        setOverwriteDialogOpen(false)
    }

    const handleDeleteDialogClose = () => {
        setDeleteIdx(-1)
        setDeleteDialogOpen(false)
    }

    const handleDeleteDialogSelect = () => {
        dispatch(deleteGenFavorite(deleteIdx))
        setDeleteIdx(-1)
        setDeleteDialogOpen(false)
    }

    const loadFavorite = (favorite: PostGenerateAsyncRequest) => {
        dispatch(setGenForm(favorite))
        dispatch(setReload(true))
        setAnchorEl(null)
    }

    const addNewFavorite = () => {
        setAddDialogOpen(true)
        setAnchorEl(null)
    }

    const overwriteFavorite = () => {
        setOverwriteDialogOpen(true)
        setAnchorEl(null)
    }

    const deleteFavorite = () => {
        setDeleteDialogOpen(true)
        setAnchorEl(null)
    }

    return (
        <>
            <Dialog open={deleteDialogOpen} onClose={handleOverwriteDialogClose}>
                <DialogTitle>Delete Preset</DialogTitle>
                <DialogContent>
                    <DialogContentText>Select a preset to delete.</DialogContentText>
                    <List>
                        {genFavorites.map((gen, idx) => (
                            <ListItem
                                key={idx}
                                disablePadding
                                sx={{ backgroundColor: deleteIdx === idx ? "error.dark" : "" }}
                                onClick={() => {
                                    setDeleteIdx(idx)
                                }}>
                                <ListItemButton>
                                    <ListItemText primary={gen.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose}>Cancel</Button>
                    <Button disabled={deleteIdx === -1} onClick={handleDeleteDialogSelect}>
                        Select
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={overwriteDialogOpen} onClose={handleOverwriteDialogClose}>
                <DialogTitle>Overwrite Preset</DialogTitle>
                <DialogContent>
                    <DialogContentText>Select a preset to overwrite.</DialogContentText>
                    <List>
                        {genFavorites.map((gen, idx) => (
                            <ListItem
                                key={idx}
                                disablePadding
                                sx={{ backgroundColor: overwriteIdx === idx ? "success.dark" : "" }}
                                onClick={() => {
                                    setOverwriteIdx(idx)
                                }}>
                                <ListItemButton>
                                    <ListItemText primary={gen.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOverwriteDialogClose}>Cancel</Button>
                    <Button disabled={overwriteIdx === -1} onClick={handleOverwriteDialogSelect}>
                        Select
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={addDialogOpen} onClose={handleAddDialogClose}>
                <DialogTitle>Add New Preset</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter a friendly name for this new preset.</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        fullWidth
                        variant="standard"
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddDialogClose}>Cancel</Button>
                    <Button onClick={handleAddDialogCreate}>Create</Button>
                </DialogActions>
            </Dialog>
            <IconButton onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
                {genFavorites.map((favorite, idx) => (
                    <MenuItem
                        key={idx}
                        onClick={() => {
                            loadFavorite(favorite.form)
                        }}>
                        {favorite.name}
                    </MenuItem>
                ))}

                {genFavorites.length > 0 ? <Divider /> : null}
                {genFavorites.length > 0 ? <MenuItem onClick={deleteFavorite}>Delete Preset</MenuItem> : null}
                {genFavorites.length > 0 ? <Divider /> : null}
                {genFavorites.length > 0 ? <MenuItem onClick={overwriteFavorite}>Overwrite Preset</MenuItem> : null}
                {genFavorites.length > 0 ? <Divider /> : null}

                <MenuItem onClick={addNewFavorite}>Add New Preset</MenuItem>
            </Menu>
        </>
    )
}

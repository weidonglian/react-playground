import React from 'react'
import { connect } from 'react-redux'
import { Fab, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core'
import { AppState } from '../../reducers'
import { Note } from '../../models'
import { Dispatch } from 'redux'
import { getNotes } from '../../selectors/notes'
import { toggleTodo, addNote } from '../../actions/notes'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'

interface UiNotesAddProps {
    addNote: (name: string) => void
}

interface UiNotesAddState {
    open: boolean,
    name: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    fab: {
        margin: theme.spacing(1),
    }
}))


class UiNotesAdd extends React.PureComponent<UiNotesAddProps, UiNotesAddState> {
    state: UiNotesAddState = {
        open: false,
        name: ''
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.handleClose();
        const { name } = this.state
        const { addNote } = this.props
        if (name) {
            addNote(name)
        }
    }

    onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.target.value
        })
    }

    onClickAddNote = () => {
        this.setState({
            open: true,
            name: '',
        })
    }

    render() {
        const { open } = this.state
        return (
            <React.Fragment>
                <Fab color="secondary" aria-label="add" size="small" onClick={this.onClickAddNote}>
                    <AddIcon />
                </Fab>

                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add new note</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            onChange={this.onChangeName}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addNote: (name: string) => dispatch(addNote(name)),
})

export const NotesAdd = connect(
    null,
    mapDispatchToProps
)(UiNotesAdd)
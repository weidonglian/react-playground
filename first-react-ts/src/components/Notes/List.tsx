import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../reducers'
import { Note } from '../../models'
import { Dispatch } from 'redux'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import { UiTodosList } from '../Todos/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { getNotes } from '../../selectors/notes'
import { toggleTodo, addTodo } from '../../actions/notes'
import { UiTodosAdd } from '../Todos/Add'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    paper: {
      minWidth: '120px',
      padding: theme.spacing(2)
    },
    control: {
      padding: theme.spacing(2),
    },
}))

interface UiNotesListProps {
    notes: Note[],
    toggleTodo: (noteId: number, todoId: number) => void,
    addTodo: (noteId: number, todoName: string) => void
}

const UiNotesList = ({ notes, toggleTodo, addTodo }: UiNotesListProps) => {
    const classes = useStyles();
    return (
      <Grid container spacing={2} className={classes.root}>
        {notes.map(note => (
          <Grid key={note.id} item xs={4}>
            <Paper className={classes.paper}>
              <Typography variant='h5'>
                {note.name}
              </Typography>
              <UiTodosList todos={note.todos} toggleTodo={(todoId: number) => toggleTodo(note.id, todoId)}></UiTodosList>
              <UiTodosAdd addTodo={(todoName: string) => addTodo(note.id, todoName)}/>
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
}

const mapStateToProps = (appState: AppState) => ({
    notes: getNotes(appState)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTodo: (noteId: number, todoId: number) => dispatch(toggleTodo(noteId, todoId)),
    addTodo: (noteId: number, todoName: string) => dispatch(addTodo(noteId, todoName))
})

export const NotesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UiNotesList)
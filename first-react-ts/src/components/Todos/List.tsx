import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import { Todo } from '../../models';
import { Dispatch } from 'redux';
import { getTodos } from '../../selectors/notes';
import { toggleTodo } from '../../actions/todos';
import { FormGroup, FormControlLabel, Checkbox, Typography, Box } from '@material-ui/core'

interface UiTodosListProps {
    todos: Todo[],
    toggleTodo: (todoId: number) => void
}

const UiTodosList = ({ todos, toggleTodo }: UiTodosListProps) => {
    return (
        <Box m={2}>
            <FormGroup>
                {todos && todos.length > 0 ? (
                    todos.map(todo => <FormControlLabel key = {todo.id}
                        control={<Checkbox checked={todo.done} onChange={() => toggleTodo(todo.id)} />}
                        label={todo.name} />)
                ) : (
                        <Typography variant='body1'>Nothing has been planed, add your first todo now. </Typography>
                    )}
            </FormGroup>
        </Box>
    )
}

const mapStateToProps = (appState: AppState) => ({
    todos: getTodos(appState)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTodo: (todoId: number) => dispatch(toggleTodo(todoId)),
});

export const TodosList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UiTodosList)
import React from 'react';
import { Todo } from '../../models';
import { FormGroup, FormControlLabel, Checkbox, Typography, Box, InputBase, Theme } from '@material-ui/core'

interface UiTodosListProps {
    todos: Todo[],
    toggleTodo: (todoId: number) => void
}

export const UiTodosList = ({ todos, toggleTodo }: UiTodosListProps) => {

    // const classes = useStyles()
    return (
        <Box p={0}>
            <FormGroup>
                {todos.map(todo => (
                    <FormControlLabel key={todo.id}
                        control={<Checkbox checked={todo.done} onChange={() => toggleTodo(todo.id)} />}
                        label={todo.name}
                    />)
                )}
            </FormGroup>
        </Box>
    )
}
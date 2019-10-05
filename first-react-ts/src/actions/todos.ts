import { Todo } from '../models'

/// Types
export enum ActionTypes {
    ADD_TODO = '[todos] ADD_TODO',
    TOGGLE_TODO = '[todos] TOGGLE_TODO'
}

/// Actions
export interface AddTodoAction {
    type: ActionTypes.ADD_TODO,
    payload: {
        todo: Todo
    }
}

export interface ToggleTodoAction {
    type: ActionTypes.TOGGLE_TODO,
    payload: {
        todoId: number
    }
}

export type Action = AddTodoAction | ToggleTodoAction

/// Action creators

/** In order to automatically generate the action id. */
let nextId = 0

export const addTodo = (name: string): AddTodoAction => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {
                id: nextId++,
                name: name,
                done: false,
            }
        }
    }
}

export const toggleTodo = (todoId: number): ToggleTodoAction => {
    return {
        type: ActionTypes.TOGGLE_TODO,
        payload: {
            todoId: todoId
        }
    }
}
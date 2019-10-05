import { Action, ActionTypes } from '../actions/todos'
import { Todo } from '../models/index'
import { stat } from 'fs'

/// state definition
export interface State {
    todos: Todo[]
}

/// init state
export const initialState: State = {
    todos: []
}

/// reducer
export const reducer = (state: State = initialState, action: Action): State => {
    switch(action.type) {
        case ActionTypes.ADD_TODO: {
            const { todo } = action.payload
            return {
                ...state,
                todos: [...state.todos, todo]
            }
        }

        case ActionTypes.TOGGLE_TODO: {
            const { todoId } = action.payload
            return {
                ...state,
                todos: state.todos.map(todo => todo.id == todoId ? { ...todo, done: !todo.done} : todo)
            }
        }

        default:
            return state
    }
}
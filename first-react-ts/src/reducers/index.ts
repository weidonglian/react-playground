import { combineReducers } from 'redux'
import * as fromTodos from './todos'

export interface State {
    todos: fromTodos.State
}

export const reducer = combineReducers<State>({
    todos: fromTodos.reducer
})
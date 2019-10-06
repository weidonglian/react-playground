import { State } from '../reducers'
import { createSelector } from 'reselect'
import * as todosReducer from '../reducers/todos'

const getTodosState = (state: State): todosReducer.State => state.todos

export const getTodos = createSelector([getTodosState], s=>s.todos);
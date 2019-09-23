import React from "react"
import { connect } from "react-redux"
import Todo from "./Todo"
import styled from 'styled-components'
import { getTodosByVisibilityFilter } from "../redux/selectors"

const TodoListContainer = styled.ul`
  margin-top: 1rem;
  //text-align: left;
  list-style: none;
`

const TodoList = ({ todos }) => (
  <TodoListContainer>
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />
        })
      : "No todos, yay!"}
  </TodoListContainer>
)

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todos }
}
// export default TodoList
export default connect(mapStateToProps)(TodoList)

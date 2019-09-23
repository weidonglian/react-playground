import React from "react"
import { connect } from "react-redux"
import styled, {css} from 'styled-components'
import { toggleTodo } from "../redux/actions"

const TodoItem  = styled.li`
  cursor: pointer;
  line-height: 1.5;
`

const todoCompletedMixin = css`
  text-decoration: line-through;
  color: lightgray;
`

const TodoSpan = styled.span`
  ${props => (props.todo && props.todo.completed ? todoCompletedMixin : 'color: blue')}
`
const Todo = ({ todo, toggleTodo }) => (
  <TodoItem onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <TodoSpan>
      {todo.content}
    </TodoSpan>
  </TodoItem>
)

// export default Todo
export default connect(
  null,
  { toggleTodo }
)(Todo)

import React from "react"
import styled from 'styled-components'
import { connect } from "react-redux"
import { addTodo } from "../redux/actions"

const AddTodoButton = styled.button`
  margin-left: 10px;
  cursor: pointer;
color: #fff;
    background-color: #007bff;
font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid #007bff;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s;
    
`

const AddTodoInput = styled.input`
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s 
`

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: "" }
  }

  updateInput = input => {
    this.setState({ input })
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: "" })
  }

  render() {
    return (
      <div>
        <AddTodoInput
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <AddTodoButton onClick={this.handleAddTodo}>
          Add Todo
        </AddTodoButton>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
// export default AddTodo

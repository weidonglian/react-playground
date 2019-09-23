import React from 'react'
import styled from 'styled-components'
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

const AppContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;  
`

const Header = styled.h1`
  text-align: center;
`

const Border = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  padding: 16px;
`

export default function TodoApp() {
  return (
      <AppContainer>
          <div>
              <Header>Todo List</Header>
              <Border>
                  <AddTodo />
                  <TodoList />
                  <VisibilityFilters />
              </Border>
          </div>
      </AppContainer>
  )
}


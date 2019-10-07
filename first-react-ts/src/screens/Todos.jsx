import React from 'react'
import { TodosList } from '../components/Todos/List'
import { TodosAdd } from '../components/Todos/Add'

export class ScreenTodos extends React.Component {
    render() {
        return (
            <div>
                <h1>My Todo List</h1>
                <TodosList></TodosList>
                <TodosAdd></TodosAdd>
            </div>
        )
    }
}
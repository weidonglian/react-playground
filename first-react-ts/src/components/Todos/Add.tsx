import React from 'react'

export interface TodosAddProps {

}

export class TodosAdd extends React.Component<TodosAddProps> {
    render() {
        return (
            <React.Fragment>
                <h1>Add a new todo:</h1>
                <input title='todo'></input>
            </React.Fragment>
        )
    }
}
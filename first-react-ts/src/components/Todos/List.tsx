import React from 'react'

export interface TodosListProps {

}

export class TodosList extends React.Component<TodosListProps> {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>this is a</li>
                    <li>this is b</li>
                    <li>this is c</li>
                </ul>
            </React.Fragment>
        )
    }
}
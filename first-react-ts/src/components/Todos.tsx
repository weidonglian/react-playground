import * as React from 'react';

export interface TodosProps {

}

export class Todos extends React.PureComponent<TodosProps> {
    render() {
        return (
            <React.Fragment>
                <h1>My todo list</h1>
                <ul>
                    <li>this is a</li>
                    <li>this is b</li>
                    <li>this is c</li>
                </ul>
            </React.Fragment>
        )
    }
}
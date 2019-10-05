import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Hello, HelloAlt } from './components/Hello'
import { Todos } from './components/Todos'

export class App extends React.Component<{}> {
    render() {
        return (
            <div>
                <Todos />
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

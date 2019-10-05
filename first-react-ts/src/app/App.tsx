import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Hello, HelloAlt } from './components/Hello'

export class App extends React.Component<{}> {
    render() {
        return (
            <React.Fragment>
                <Hello compiler='llvm' framework='also great stuff'></Hello>
                <HelloAlt compiler='gcc' framework='include me'></HelloAlt>
            </React.Fragment>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

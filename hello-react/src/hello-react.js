import React from 'react'
import HelloClock from './hello-clock'

const HelloReact = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>This is my first react app.</p>
            <HelloClock></HelloClock>
        </div>
    )
}

export default HelloReact
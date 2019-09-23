import React from "react"

class HelloClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true,
            time: new Date().toLocaleString(),
        }
    }

    handleClick = (e) => {
        console.log(`handleClick ${e}`)
        console.log(`state before handleClick:${this.state}`)
        this.setState( Object.assign({}, this.state, {
                isToggleOn: !this.state.isToggleOn,
        }));
        console.log(`state after handleClick:${this.state}`)
    }

    addTimer() {
        if (!this.timer) {
            this.timer = setInterval(() => {
                this.setState(Object.assign({}, this.state, {
                    time: new Date().toLocaleString(),
                }))
            })
        }
    }

    removeTimer() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    }

    updateTimer() {
        if (this.state.isToggleOn) {
            this.addTimer()
        } else {
            this.removeTimer()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateTimer()
    }

    componentDidMount() {
        console.log("hello clock component did mount")
        this.updateTimer()
    }

    componentWillUnmount() {
        console.log("hello clock will unmount")
        this.removeTimer()
    }

    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "Turn Off" : "Turn On"}
                </button>
            </div>
        )
    }
}

export default HelloClock
import React, { Component } from 'react'
import WithCounter from './withCounter'

class ClickCounter extends Component {

    render() {
        const {count,increment}=this.props
        return (
            <div>
                <button onClick={increment}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter,5)

import React, { Component } from 'react'

class ClassClick extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>console.log("Button clicked")}>Click me</button>
            </div>
        )
    }
}

export default ClassClick

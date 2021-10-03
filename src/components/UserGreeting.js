import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div>Welcome Sanjana</div>
        // return this.state.isLoggedIn?
        //     <div>Welcome Sanjana</div>:<div>Welcome Guest</div>
        // let message;
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Sanjana</div>
        // }
        // else{
        //     message=<div>Welcome Guest</div>
        // }
        // return message
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Sanjana</div>
        // }
        // else{
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default UserGreeting

import React, { Component } from 'react'

const colors=['RED','BLUE','GREEN']
export class Login extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             color:colors[0]
        }
    }

    reset=()=>{
        this.setState({
            username:'',
            password:'',
            color:colors[0] 
        })
    }

    render() {
        return (
          <form className="login">
              <label>Username</label>
              <input type='text' id='email' onChange={event=>this.setState({username:event.target.value})} name='email' value={this.state.username}/>
              <label>Password</label>
              <input type='password' id='password' onChange={event=>this.setState({password:event.target.value})} name='password'  value={this.state.password}/>
              <label>Color</label>
              <select name='color' id='color' onBlur={event=>this.setState({color:event.target.value})} >
                  {
                      colors.map(color=><option key={color}>{color}</option>)
                  }
              </select>
              <button type='submit' onClick={this.reset}>Submit</button>
          </form>
        )
    }
}

export default Login

import React, { Component } from 'react'

const WithCounter=(WrappedComponent,incrementNumber)=>{
    class WithCounter extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
       incrementCount=()=>{
            this.setState(prevState=>{
                return {count:prevState.count+incrementNumber}
            })
        }
        render(){
            return <WrappedComponent count={this.state.count} increment={this.incrementCount} {...this.props}/>
        }
    }
    return WithCounter
}
export default WithCounter
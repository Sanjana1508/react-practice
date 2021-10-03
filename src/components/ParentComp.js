import React, { Component,PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Sanjana"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Sanjana"
            })
        },2000);
    }
    
    render() {
        console.log("Parent Component render");
        return (
            <div>
                Parent Component
                <MemoComp />
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp

import React, { Component } from 'react'
import LifeCylceB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Sanjana"
        };
        console.log("LifecycyeA constructor");
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate");
    }

    
    
    render() {
        console.log("LifecycleA render");
        return (
            <div>
                LifeCycleA
                <button onClick={()=>this.setState({name:"Changed"})}>Change state</button>
                <LifeCylceB />
            </div>
        )
    }
}

export default LifeCycleA

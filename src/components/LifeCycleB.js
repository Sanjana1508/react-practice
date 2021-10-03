import React, { Component } from 'react'

class LifeCylceB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Sanjana"
        };
        console.log("LifecycyeB constructor");
    }

    componentDidMount(){
        console.log("LifeCylceB componentDidMount");
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCylceB getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate");
    }
    
    render() {
        console.log("LifeCylceB render");
        return (
            <div>
                LifeCylceB
            </div>
        )
    }
}

export default LifeCylceB

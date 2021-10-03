import React from 'react'
const Hello=()=>{
    return (
        <div id="hello" className="dummyClass">
            <h1>Hello Sanjana</h1>
        </div>
    )
    //return React.createElement('div',{id:"hello",className:"dummyClass"},React.createElement('h1',null,'Hello Sanjana'))
}
export default Hello
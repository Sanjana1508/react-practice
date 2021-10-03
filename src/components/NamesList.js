import React from 'react'
import Person from './Person'

function NamesList() {
    const names=["Bruce","Clark","Diana","Diana"];
    const persons=[
        {
            id:1,
            name:"Bruce",
            age:20,
            skill:"React"
        },
        {
            id:2,
            name:"Clark",
            age:20,
            skill:"Angular"
        },
        {
            id:3,
            name:"Diana",
            age:20,
            skill:"Vue"
        }
]
    const personList=persons.map(person=><Person key={person.id} person={person}/>)
    return <div>{personList}</div>
    // const namesList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
    // return <div>{namesList}</div>
}

export default NamesList

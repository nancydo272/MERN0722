import React from 'react'
import { useParams} from 'react-router-dom'; 

const Person = (props) => {
    
    const { id } = useParams()

    const {people} = props
    
    return (
        <div>
            <h1>Name: {people[id].name} </h1>
            <h1>Age: {people[id].age} </h1>
            <h1>SomethingElse: {people[id].somethingElse} </h1>
        </div>
    )
}

export default Person
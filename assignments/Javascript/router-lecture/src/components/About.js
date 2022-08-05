import React from 'react'
import { useNavigate } from 'react-router-dom'; 

const About = () => {
    
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/home')
    }

    return (
        <div>
            <h1>About</h1>
            <button onClick={goHome}>Go Home</button>
        </div>
    )
}

export default About

//use useNavigate anytime you want to navigate to another component w/o using a link
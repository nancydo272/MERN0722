import React, {useState} from 'react'; 
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom'; 

const Login = ({isLoggedIn, setIsLoggedIn}) => {

    const [user, setUser] = useState({
        email:'', 
        password:'', 
    })

    const navigate = useNavigate()

    const handleChange =(e) =>{
        setUser({
            ...user,[e.target.name]:e.target.value,
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/login', user, {withCredentials:true})
        .then((res)=>{
            console.log(res.data); 
            navigate('/')
        })
    }

    return (
        <div>
            <h1>Login for Movie DB</h1>
            <form onSubmit={submitHandler}>
                <label>Email:</label>
                <input type="text" name="email" value={user.email} onChange={handleChange} className="form-control"/>
                <label>Password:</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control"/>
                <button className="btn btn-info">Login</button>
            </form>
        </div>
    )
}

export default Login
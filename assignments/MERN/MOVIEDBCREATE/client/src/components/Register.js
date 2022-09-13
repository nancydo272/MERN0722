import React, {useState} from 'react'; 
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom'; 

const Register = (props) => {
    const {setIsLoggedIn} = props
    console.log(props)

    const [user, setUser] = useState({
        firstName:'', 
        lastName:'',
        email:'', 
        password:'', 
        confirmPassword:''
    })

    const navigate = useNavigate()

    const handleChange =(e) =>{
        setUser({
            ...user,[e.target.name]:e.target.value,
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/register', user, {withCredentials:true})
        .then((res)=>{
            console.log(res.data); 
            // setIsLoggedIn(true); 
            navigate('/')
        })
    }

    return (
        <div className="mt-5">
            <h1>Register for Movie DB</h1>
            <form onSubmit={submitHandler}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={user.firstName} onChange={handleChange}className="form-control"/>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={user.lastName} onChange={handleChange}className="form-control"/>
                <label>Email:</label>
                <input type="text" name="email" value={user.email} onChange={handleChange}className="form-control"/>
                <label>Password:</label>
                <input type="password" name="password" value={user.password} onChange={handleChange}className="form-control"/>
                <label>Confirmed Password:</label>
                <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}className="form-control"/>
                <button className="btn btn-info">Register</button>
            </form>
        </div>
    )
}

export default Register
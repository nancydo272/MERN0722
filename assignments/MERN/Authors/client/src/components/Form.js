import React, {useState} from 'react'; 
import axios from 'axios'; 
import {useNavigate, Link} from 'react-router-dom'; 

const Form = () => {

    const [name, setName] = useState(''); 
    const[errors, setErrors] = useState({}); 
    const navigate = useNavigate(); 

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors/create', {
            name
        })
        .then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.error)
        })
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input value ={name} type="text" onChange={(e)=>setName(e.target.value)}/>
                {errors.name ? <span>{errors.name.message}</span> : null }<br></br>
                <div>
                    <Link to={`/`}>Cancel</Link>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
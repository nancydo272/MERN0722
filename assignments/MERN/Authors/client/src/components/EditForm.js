import React, {useState, useEffect} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'; 
import axios from "axios"; 

const EditForm = () => {

    const [name, setName] = useState(''); 
    const[errors, setErrors] = useState({}); 
    const navigate = useNavigate(); 
    const {id} = useParams(); 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log(res.data); 
            setName(res.data.name);
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const editHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {
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
            <form onSubmit={editHandler}>
                <label>Name:</label>
                <input value ={name} type="text" onChange={(e)=>setName(e.target.value)}/>
                {errors.name ? <span>{errors.name.message}</span> : null }<br></br>
                <div>
                    <Link to={`/`}>Cancel</Link>
                    <button>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm
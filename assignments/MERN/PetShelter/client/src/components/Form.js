import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useNavigate, Link} from 'react-router-dom'; 

const Form = () => {

    const [name, setName] = useState(''); 
    const [type, setType] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [skill1, setSkill1] = useState(''); 
    const [skill2, setSkill2] = useState(''); 
    const [skill3, setSkill3] = useState(''); 
    // const [like, setLike] = useState(false); 

    const [errors, setErrors] = useState({})

    const navigate = useNavigate(); 

    const submitHandler = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:8000/api/pets/create',{
            name,
            type, 
            description, 
            skill1, 
            skill2,
            skill3
            // like
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
            <div className="d-flex justify-content-between">
                <h1>Pet Shelter</h1>
                <Link to ={'/'}>back to home</Link>
            </div>
            <h3>Know a pet needing a home?</h3>
            <div className="border border-dark">
                <form className=" d-flex justify-content-around" onSubmit={submitHandler}>
                    <div>
                        <label className="form-label">Name:</label>
                        <input  className ="form-control"type="text" onChange={(e)=>setName(e.target.value)} />
                        {errors.name ? <span className="text-danger">{errors.name.message}</span> : null }<br></br>
                        <label className="form-label">Type:</label>
                        <input  className ="form-control" type="text" onChange={(e)=>setType(e.target.value)} />
                        {errors.type ? <span className="text-danger">{errors.type.message}</span> : null }<br></br>
                        <label className="form-label">Description:</label>
                        <input  className ="form-control" type="text" onChange={(e)=>setDescription(e.target.value)} />
                        {errors.description ? <span className="text-danger">{errors.description.message}</span> : null }<br></br>
                        <button className="btn btn-primary">Add Pet</button>
                    </div>
                    <div>
                        <h4>Skills (optional):</h4>
                        <label className="form-label">Skill 1:</label>
                        <input  className ="form-control" type="text" onChange={(e)=>setSkill1(e.target.value)} />
                        {errors.skill1 ? <span className="text-danger">{errors.skill1.message}</span> : null }<br></br>
                        <label className="form-label">Skill 2:</label>
                        <input  className ="form-control" type="text" onChange={(e)=>setSkill2(e.target.value)} />
                        {errors.skill2 ? <span className="text-danger">{errors.skill2.message}</span> : null }<br></br>
                        <label className="form-label">Skill 3:</label>
                        <input className ="form-control" type="text" onChange={(e)=>setSkill3(e.target.value)} />
                        {errors.skill3 ? <span className="text-danger">{errors.skill3.message}</span> : null }<br></br>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default Form

// <label>Like: </label>
{/* <input className ="form-check-input" type="checkbox" checked = {like} onChange ={(e)=> setLike(e.target.checked)}/><br></br> */}
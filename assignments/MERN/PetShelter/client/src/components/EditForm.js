import React, {useState, useEffect} from 'react'; 
import {useParams, useNavigate, Link} from 'react-router-dom'; 
import axios from 'axios'; 

const EditForm = () => {
    const [name, setName] = useState(''); 
    const [type, setType] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [skill1, setSkill1] = useState(''); 
    const [skill2, setSkill2] = useState(''); 
    const [skill3, setSkill3] = useState(''); 
    
    const [errors, setErrors] = useState({})

    const navigate = useNavigate(); 

    const {id} = useParams(); 

    useEffect(()=>{
        axios.get( `http://localhost:8000/api/pets/${id}`)
        .then((res)=>{
            console.log(res.data);
            setName(res.data.name); 
            setType(res.data.type); 
            setDescription(res.data.description); 
            setSkill1(res.data.skill1);  
            setSkill2(res.data.skill2); 
            setSkill3(res.data.skill3); 
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const editHandler =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/${id}`,{
            name, 
            type,
            description, 
            skill1,
            skill2,
            skill3
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
            <h3 className="d-flex justify-content-start">Edit {name} Information</h3>
            <div className="border border-dark">
                <form className=" d-flex justify-content-around" onSubmit={editHandler}>
                    <div>
                        <label className="form-label">Name:</label>
                        <input className ="form-control" value ={name} type="text" onChange={(e)=>setName(e.target.value)} />
                        {errors.name ? <span className="text-danger">{errors.name.message}</span> : null }<br></br>
                        <label className="form-label">Type:</label>
                        <input className ="form-control" value ={type} type="text" onChange={(e)=>setType(e.target.value)} />
                        {errors.type ? <span className="text-danger">{errors.type.message}</span> : null }<br></br>
                        <label className="form-label">Description:</label>
                        <input className ="form-control" value={description} type="text" onChange={(e)=>setDescription(e.target.value)} />
                        {errors.description ? <span className="text-danger">{errors.description.message}</span> : null }<br></br>
                        <button className="btn btn-primary">Update Pet</button>
                    </div>
                    <div>
                        <h3>Skills (optional):</h3>
                        <label className="form-label">Skill 1:</label>
                        <input className ="form-control" value={skill1} type="text" onChange={(e)=>setSkill1(e.target.value)} />
                        {errors.skill1 ? <span className="text-danger">{errors.skill1.message}</span> : null }<br></br>
                        <label className="form-label">Skill 2:</label>
                        <input className ="form-control" value ={skill2} type="text" onChange={(e)=>setSkill2(e.target.value)} />
                        {errors.skill2 ? <span className="text-danger">{errors.skill2.message}</span> : null }<br></br>
                        <label className="form-label">Skill 3:</label>
                        <input className ="form-control" value ={skill3} type="text" onChange={(e)=>setSkill3(e.target.value)} />
                        {errors.skill3 ? <span className="text-danger">{errors.skill3.message}</span> : null }<br></br>
                    </div>
                </form>
            </div>
    
        </div>
    )
}

export default EditForm
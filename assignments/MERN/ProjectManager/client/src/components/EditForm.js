import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'; 
import axios from 'axios'; 

const EditForm = () => {
    
    const {id} = useParams(); 
    const navigate = useNavigate(); 

    const [title, setTitle] = useState(''); 
    const [price, setPrice] = useState(0); 
    const [description, setDescription] = useState(''); 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res.data); 
            setTitle(res.data.title); 
            setPrice(res.data.price); 
            setDescription(res.data.description);
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    
    const editHandler =(e)=>{
        e.preventDefault(); 
        axios.put(`http://localhost:8000/api/products/${id}`,{
        title, 
        price, 
        description
        })
        .then((res)=>{
            console.log(res)
            navigate('/productlist')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={editHandler}>
                <div>
                    <label>Title:</label>
                    <input value ={title} type="text" onChange ={(e)=> setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price: $</label>
                    <input value= {price} type="number" onChange ={(e)=> setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description:</label>
                    <input value ={description} type="text" onChange ={(e)=> setDescription(e.target.value)}/>
                </div>
                <button className="btn btn-info">Update Product</button>
            </form>
        </div>
    )
}

export default EditForm
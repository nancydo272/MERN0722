import axios from 'axios';
import React, {useEffect, useState} from 'react'; 
import {useNavigate, useParams} from 'react-router-dom'; 


const OneProduct = () =>{
    
    const {id} = useParams(); 
    const [product, setProduct]=useState({});    
    const navigate =useNavigate(); 

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const deleteHandler =(id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data); 
            navigate("/productlist"); 
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
            <h1>{product.title}</h1>
            <h2>{product.description}</h2>
            <h3>${product.price}</h3>
            <button onClick={()=>deleteHandler(product._id)}>Delete Product </button>
        </div>
    )
}

export default OneProduct
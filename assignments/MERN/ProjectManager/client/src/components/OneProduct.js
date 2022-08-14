import axios from 'axios';
import React, {useEffect, useState} from 'react'; 
import {useParams} from 'react-router-dom'; 

const OneProduct = () =>{
    
    const {id} = useParams(); 
    const [product, setProduct]=useState({});    

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <div>
            <h1>{product.title}</h1>
            <h2>{product.description}</h2>
            <h3>${product.price}</h3>
        </div>
    )
}

export default OneProduct
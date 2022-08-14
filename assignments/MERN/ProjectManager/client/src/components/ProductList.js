import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';  

const ProductList = () => {

    const [productList, setProductList]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then((res)=>{
            setProductList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    })

    const deleteHandler =(id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            const newProductList = productList.filter((product)=>{
                return product._id !== id
            })
            setProductList(newProductList)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            {
                productList.map((product)=> (
                    <div>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <button onClick={()=>deleteHandler(product._id)}>Delete Product </button>
                        <Link to={`/edit/${product._id}`}>Edit</Link>
                    </div>
                ))
                }
        </div>
    )
}

export default ProductList
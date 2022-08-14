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

    return (
        <div>
            {
                productList.map((product)=> (
                    <div>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </div>
                ))
                }
        </div>
    )
}

export default ProductList
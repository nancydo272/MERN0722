import React, {useState} from 'react'; 
import axios from 'axios'; 


const Form = () => {
    
    const [title, setTitle] = useState(''); 
    const [price, setPrice] = useState(0); 
    const [description, setDescription] = useState(''); 
    
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/', {
            title,
            price, 
            description
        })
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="col col-6 mx-auto">
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number"/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text"/>
                </div>
                <button className="btn btn-info">Create Product</button>
            </form>
        </div>
    )
    }

    export default Form

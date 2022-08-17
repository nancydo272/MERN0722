import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import {Link} from 'react-router-dom'; 

const AuthorList = () => {
    
    const [authorList, setAuthorList] = useState([]); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then((res)=>{
        setAuthorList(res.data)
        }).catch((err)=>{
        console.log(err)
        })
    },[]); 

    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
        const newAuthorList = authorList.filter((author)=>{
            return author._id !== id
        })
        setAuthorList(newAuthorList)
        }).catch((err)=>{
        console.log(err)
        })
    }
    
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/new'}> Add an Author</Link>
            <h3>We have quotes by: </h3>
            <table>
                <tr>
                    <theader>
                        <th>Author</th>
                        <th>Actions Availiable</th>
                    </theader>
                </tr>
                {
                    authorList.map((author)=>(
                        <tr>
                            <td>{author.name}</td>
                            <td>
                                <button onClick={()=>deleteHandler(author._id)}>Delete</button>
                                <Link to={`/edit/${author._id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
    }

export default AuthorList
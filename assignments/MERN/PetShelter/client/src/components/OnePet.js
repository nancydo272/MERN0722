import React, { useEffect, useState} from 'react'; 
import axios from 'axios'; 
import {useParams, Link, useNavigate} from 'react-router-dom'; 


const OnePet = () => {
    const {id} = useParams();
    const[pet, setPet] = useState({}); 
    const [petList, setPetList] = useState([]);
    const navigate = useNavigate(); 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res)=>{
            setPet(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const deleteHandler =(id)=>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then((res)=>{
            const newPetList = petList.filter((pet)=>{
                return pet._id !== id
            })
            setPetList(newPetList)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Pet Shelter</h1>
                <Link to ={'/'}>back to home</Link>
            </div>
            <div className="d-flex justify-content-between">
                <h3>Details About: {pet.name}</h3>
                <button className="btn btn-danger" onClick={()=>deleteHandler(pet._id)} >Adopt {pet.name}</button>
            </div>
            <table className="border border-dark; w-75">
                <tr>
                    <th>Pet Type:</th>
                    <td>{pet.type}</td>
                </tr>
                <tr>
                    <th>Description:</th>
                    <td>{pet.description}</td>
                </tr>
                <tr>
                    <th className="align-text-top">Skills:</th>
                    <td>
                        <p>{pet.skill1}</p>
                        <p>{pet.skill2}</p>
                        <p>{pet.skill3}</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default OnePet
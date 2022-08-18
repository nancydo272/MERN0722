import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import {Link} from 'react-router-dom'; 

const PetList = () => {
    
    const [petList, setPetList] = useState([]); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
        .then((res)=>{
            setPetList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    
    
    return (
        <div> 
            <div className="d-flex justify-content-between">
                <h1>Pet Shelter</h1>
                <Link to ={'/pets/new'}>Add a Pet to the Shelter</Link>
            </div>
            <h3 className="d-flex justify-content-start">These pets are looking for a good home.</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            
                {
                    petList.map((pet)=>(
                    <tr>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td>
                            <Link to={`/pets/${pet._id}`}>Details</Link>  |
                            <Link to={`/pets/${pet._id}/edit`}>Edit</Link>
                        </td>
                    </tr>
                ))
            }
            </table>
        </div>
    )
}

export default PetList
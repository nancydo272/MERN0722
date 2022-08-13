import React, {useState, useEffect} from 'react'; 
import {useParams, useNavigate} from 'react-router-dom'; 
import axios from 'axios'; 


const EditForm = () => {
    
    const {id} = useParams(); 
    const navigate = useNavigate(); 

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then((res)=>{
            console.log(res.data); 
            setTitle(res.data.title); 
            setGenre(res.data.genre); 
            setBoxArt(res.data.boxArt); 
            setDuration(res.data.duration); 
            setRating(res.data.rating); 
            setActors(res.data.actors); 
            setIsKidFriendly(res.data.isKidFriendly); 
            setReleaseYear(res.data.releaseYear); 
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const [title, setTitle] = useState(''); 
    const [genre, setGenre] = useState(''); 
    const [boxArt, setBoxArt] = useState(''); 
    const [duration, setDuration] = useState(''); 
    const [rating, setRating] = useState(''); 
    const [actors, setActors] = useState([]); 
    const [isKidFriendly, setIsKidFriendly] = useState(false);
    const [releaseYear, setReleaseYear] = useState(0); 
    
    const editHandler =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/movies/${id}`,{
            title, 
            genre, 
            boxArt, 
            duration, 
            rating, 
            actors, 
            isKidFriendly, 
            releaseYear
        })
        .then((res)=>{
            console.log(res)
            navigate('/movielist')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="col col-6 mx-auto">
            <form onSubmit={editHandler}>
                <label className="form-label">Title:</label>
                <input value={title} className ="form-control" type="text" onChange ={(e)=> setTitle(e.target.value)} />
                <label className="form-label">Genre: </label>
                <select className ="form-control" value={genre} name="genre" onChange ={(e)=> setGenre(e.target.value)}>
                    <option>Select A Genre</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Action">Action</option>
                    <option value="Family">Family</option>
                    <option value="Animated">Animated</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Romcom">Romcom</option>
                    <option value="Silent Movie">Silent Movie</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Crime Noir">Crime Noir</option>
                    <option value="French Cinema">French Cinema</option>
                    <option value="Horror/Comedy">Horror/Comedy</option>
                    <option value="Kung-Fu">Kung-Fu</option>
                </select>
                {/* <input className ="form-control" type="text" onChange ={(e)=> setGenre(e.target.value)}/> */}
                <label className="form-label">BoxArt:</label>
                <input value={boxArt}className ="form-control" type="text"  onChange ={(e)=> setBoxArt(e.target.value)}/>
                <label className="form-label">Duration:</label>
                <input value={duration} className ="form-control" type="text" onChange ={(e)=> setDuration(e.target.value)}/>
                <label className="form-label">Rating:</label>
                <select className ="form-control" value={rating} name="rating" OnChange ={(e)=> setRating(e.target.value)}>
                    <option>Select A Rating</option>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG-13">PG-13</option>
                    <option value="R">R</option>
                    <option value="NC-17">NC-17</option>
                </select>
                {/* <input className ="form-control" type="text" onChange ={(e)=> setRating(e.target.value)}/> */}
                <label className="form-label">Actors:</label>
                <input value={actors} className ="form-control" type="text" onChange ={(e)=> setActors(e.target.value)}/>
                <label className="form-label">Kid Friendly: </label>
                <input value={isKidFriendly}className ="form-check-input" type="checkbox" checked = {isKidFriendly} onChange ={(e)=> setIsKidFriendly(e.target.checked)}/><br></br>
                <label className="form-label">Release Year: </label>
                <input value={releaseYear}className ="form-control" type="number" onChange ={(e)=> setReleaseYear(e.target.value)}/>
                <button className="btn btn-info">Update Movie</button>
            </form>
        </div>
    )
}

export default EditForm
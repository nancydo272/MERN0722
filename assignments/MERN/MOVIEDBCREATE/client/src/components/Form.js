import { useState } from 'react';
import axios from 'axios'; 
import { useNavigate} from 'react-router-dom'; 

const Form = () => {
    
    const [title, setTitle] = useState(''); 
    const [genre, setGenre] = useState(''); 
    const [boxArt, setBoxArt] = useState(''); 
    const [duration, setDuration] = useState(''); 
    const [rating, setRating] = useState(''); 
    const [actors, setActors] = useState([]); 
    const [isKidFriendly, setIsKidFriendly] = useState(false);
    const [releaseYear, setReleaseYear] = useState(0); 

    const [errors, setErrors]= useState({}); 

    const navigate = useNavigate(); 
//going to use Axios to send data since it is the server we are using to run react
//sending data with routes from backend server with base URL
//need your promises since this is asynch request, not sure when the reponses will come back
//after the URL, need to request to send state object data to the DB, need to match the model
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/movies/create', {
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
            setErrors(err.response.data.error)
        })
    }
    
    return (
            <div className="col col-6 mx-auto">
                <form onSubmit={submitHandler}>
                    <label className="form-label">Title:</label>
                    <input className ="form-control" type="text" onChange ={(e)=> setTitle(e.target.value)} />
                    {/* Validations for form entries  */}
                    {errors.title ? <span className="text-danger">{errors.title.message}</span> : null }<br></br>
                    {/* {errors.title && <span>{errors.title.message}</span>} */}
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
                    <input className ="form-control" type="text"  onChange ={(e)=> setBoxArt(e.target.value)}/>
                    <label className="form-label">Duration:</label>
                    <input className ="form-control" type="text" onChange ={(e)=> setDuration(e.target.value)}/>
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
                    <input className ="form-control" type="text" onChange ={(e)=> setActors(e.target.value)}/>
                    <label className="form-label">Kid Friendly: </label>
                    <input className ="form-check-input" type="checkbox" checked = {isKidFriendly} onChange ={(e)=> setIsKidFriendly(e.target.checked)}/><br></br>
                    <label className="form-label">Release Year: </label>
                    <input className ="form-control" type="number" onChange ={(e)=> setReleaseYear(e.target.value)}/>
                    <button className="btn btn-info">Create Movie</button>
                </form>
            </div>
    )
}

export default Form
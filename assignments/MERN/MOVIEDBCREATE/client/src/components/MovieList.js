import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import {Link} from 'react-router-dom'; 


const MovieList = () => {
    
    const [movieList, setMovieList] = useState([]); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/movies')
        .then((res)=>{
            setMovieList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    
    const deleteHandler =(id)=>{
        axios.delete(`http://localhost:8000/api/movies/${id}`)
        .then((res)=>{
            const newMovieList = movieList.filter((movie)=>{
                return movie._id !== id
            })
            setMovieList(newMovieList)
        }).catch((err)=>{
            console.log(err)
        })
    }

    //if you dont have the dependency array than the useEffect will keep running everything there is a change 
    return (
        <div>
            {
                movieList.map((movie)=>(
                    <div className="col col-4 mt-3">
                        <img src={movie.boxArt}/>
                        <div><Link to={`/movie/${movie._id}`}>{movie.title}</Link></div>
                        <button onClick={()=>deleteHandler(movie._id)} >Delete Movie</button>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList
import axios from 'axios';
import React, {useEffect, useState} from 'react'; 
import {useParams, Link} from 'react-router-dom'; 

const OneMovie = () => {
    
    const {id} = useParams(); 
    const [movie, setMovie]= useState({}); 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then((res)=>{
            setMovie(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    
    return (
        <div className="col-7 mx-auto mt-5"> 
            <img className="col col-3" src={movie.boxArt} />
            <h1>{movie.title}</h1>
            <h2>{movie.releaseYear}</h2>
            <h2>{movie.genre}</h2>
            <h2>{movie.rating}</h2>
            <Link to={`/editmovie/${movie._id}`}>Edit Movie</Link>
        </div>
    )
}

export default OneMovie
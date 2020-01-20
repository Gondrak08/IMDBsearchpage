import React, {useState, useEffect, } from 'react'
import './index.css'
import axios from 'axios'
import Movie from '../movies/index'


export default function Main(){
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        async function getMovies(){
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
            console.log(response.data.results);

            setMovies(response.data.results);

        }
       
        getMovies();
        
    }, [query]);


    return(
        <>
        <div className="container justify-content-centet mr-5 pt-5">
            <div className="row">
                <input 
                    type='text'
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
            </div>
        </div>
        <Movie 
        movies={movies} />
        </>
    )
}





import React, {useState, useEffect} from 'react'
import './index'
import axios from 'axios'

export default function Movies(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        async function getMovies(){
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=hulk&page=1$include_adult=false`
            )
            console.log(response.data.results)
          setMovies=[response.data.results]  
        }
        getMovies();
    },[])

    return(
        <>
            <div className="product-list">
                {
                    movies.map(movie=>(
                        <Link to={`/products/${movie.id}`} style={{textDecoration:'none'}} >
                            <div  key={movie.id} className="Card" >
                                <div className="Card-row">
                                    <div className="Card-col-1">
                                        <div className="poster">
                                            <img src={movie.poster_path} alt="poster"/>
                                        </div>
                                    </div>
                                    <div className="Card-col-2">
                                        <div className="Card-header">
                                            <h1>{movie.title}</h1>
                                        </div>
                                        <div className="content">
                                            <div className="top">
                                                <div className="rate">
                                                    <p><strong>Rate</strong>: {movie.vote_average}</p>
                                                </div>
                                                <div className="data">
                                                    <p><small>Release date: </small> {movie.release_date} </p>
                                                </div>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <strong>sinopsis</strong> : 
                                                    <br/>
                                                    {movie.overview}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}
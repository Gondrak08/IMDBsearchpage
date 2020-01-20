import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

export default function Movies({movies}){

    return (
        <>
            {
                    movies.map(movie=>(
                        <Link to={`/products/${movie.id}`} style={{textDecoration:'none'}} >
                            <div  key={movie.id} className="Card" >
                                <div className="Card-row">
                                    <div className="Card-col-1">
                                        <div className="poster">
                                            <img src={'https://image.tmdb.org/t/p/w200' + movie.poster_path} alt="poster"/>
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

        </>
    )

}

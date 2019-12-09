import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Main extends Component {
    state={
        movies:[],
        productInfo:{},
        page:1,
    }

    componentDidMount(){
        this.getMovies()
    }

    getMovies = async(page=1)=>{
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=hulk&page=${page}$include_adult=false`)
        console.log(response.data.results)
        const {results, ...productInfo} = response.data

        this.setState({movies: results, productInfo, page})
        // console.log(this.movies)

    }

    prevPage=()=>{
        const{page, productInfo } = this.state;
        if(page===1) return;
        const pageNumber = page -1;
        this.getMovies(pageNumber)
    }

    nextPage=()=>{
        const{page, productInfo}= this.state;
        if(page === productInfo.pages) return;

        const pageNumber = page +1;
        this.getMovies(pageNumber);
    }

    render() {
        const {movies, page, productInfo} = this.state
        return (
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
                <div className="actions">
                    <button  disabled={page ===1} onClick={this.prevPage} >Anterior</button>
                    <button  disabled={page ===productInfo.pages} onClick={this.nextPage} >Próximo</button>
                </div>
            </div>
        )
    }
}

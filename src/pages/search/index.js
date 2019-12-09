import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import {Link} from 'react-router-dom'





export default class Index extends Component {
    state={
        movies:[],
        value:'',
        search:[],
        page:1,
        productInfo:{}
    }
    componentDidMount(){
        this.getMovie()
    }

    getMovie = async(val, page=1)=>{
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${val}&page=${page}$include_adult=false`)
        console.log(response.data.results)

        const {results, ...productInfo} = response.data

        

        this.setState({
            movies: results, productInfo, page
        })


    }
    
    onChangeHandler = async (e)=>{
        this.getMovie(e.target.value)
        this.setState({value: e.target.value})
    }

    prevPage=()=>{
        const{page, productInfo} = this.state;
        if(page===1) return;
        const pageNumber = page -1;
        this.getMovie(pageNumber)
    }

    nextPage = () =>{
        const{page, productInfo} = this.state;
        if(page === productInfo.pages) return;

        const pageNumber = page + 1;
        this.getMovie(pageNumber)
    }
   
    // searchChange = e =>{
    //     this.setState({search:e.target.value})
    // }



    render() {
       const {movies, page, productInfo} = this.state
        return (
            <div>
                <div className="container justify-content-center mr-5 pt-5" >
                    <div className="row">
                        <input type="text"
                            value={this.state.value}
                            onChange={this.onChangeHandler}
                            placeholder="procure seu filme"
                            style={{width:'50%'}}
                            
                        />
                    </div>
                </div>
                {
                    movies.filter(movie=>movie.title.includes(this.state.search)).map(movie=>(

                        <Link to={`/products/${movie.id}`} style={{textDecoration:'none'}} >
                            <div key={movie.id} className="Card" >
                                    <div className="Card-row">
                                        <div className="Card-col-1">
                                            <div className="poster">
                                                <img src={'https://image.tmdb.org/t/p/w185' +  movie.poster_path} alt="poster"/>
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
                    <button disbaled={page === 1} onClick={this.prevPage}> Anterior </button>
                    <button disbaled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}

import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'


export default function Product({match}){
    const [movie, setMovie ] = useState([])
    const {id} = match.params;

    useEffect(()=>{
        async function loadMovie(){
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
            setMovie(response.data);
        }
        loadMovie();
    },[id]);

    return(
        <>
             <Card>
                     <CardHeader>
                         <h1>{movie.title}</h1>
                     </CardHeader>
                     <CardRow>
                         <CardCol1>
                             <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="poster"/>
                         </CardCol1>
                         <CardCol2>
                             <CardBody>
                                 <h2> sinopse: </h2>
                                 <hr/>
                                 <p> {movie.overview} </p>
                             </CardBody>
                             <CardBox>
                                 <h2>info</h2>
                                 <hr/>
                                 <CardBox2>
                                     <p>Situação</p>
                                     <p>Idioma</p>
                                     <p>Duração</p>
                                     <p>Orçamento</p>
                                     <p>Receita</p>
                                     <p>Lucro</p>
                                 </CardBox2>
                                 <CardRate>
                                     Rate: <p>{movie.vote_average}</p>
                                </CardRate>
                             </CardBox>
                        </CardCol2>
                     </CardRow>
                 </Card>
        </>
    )
}




// export default class Product extends Component {
//     state={
//         movie:{},
//     }

//     async componentDidMount(){
//         const {id} = this.props.match.params
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
//         this.setState({
//             movie: response.data
//         })
//     }

//     render() {
//         const {movie} = this.state
//         return (
//             <>
//                 <Card>
//                     <CardHeader>
//                         <h1>{movie.title}</h1>
//                     </CardHeader>
//                     <CardRow>
//                         <CardCol1>
//                             <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="poster"/>
//                         </CardCol1>
//                         <CardCol2>
//                             <CardBody>
//                                 <h2> sinopse: </h2>
//                                 <hr/>
//                                 <p> {movie.overview} </p>
//                             </CardBody>
//                             <CardBox>
//                                 <h2>info</h2>
//                                 <hr/>
//                                 <CardBox2>
//                                     <p>Situação</p>
//                                     <p>Idioma</p>
//                                     <p>Duração</p>
//                                     <p>Orçamento</p>
//                                     <p>Receita</p>
//                                     <p>Lucro</p>
//                                 </CardBox2>
//                                 <CardRate>
//                                     Rate: <p>{movie.vote_average}</p>
//                                 </CardRate>
//                             </CardBox>
//                         </CardCol2>
//                     </CardRow>
//                 </Card>

//             </>
//         )
//     }
// }

const Card = styled.div`
margin: 5rem;
background-color: #fff;
`

const CardRow = styled.div`
display:flex;
flex-wrap: wrap;
flex-direction: row;
`
const CardCol1= styled.div`
flex:1;
order:2;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
    img{
        flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat; 
    }
`
const CardCol2 = styled.div`
flex:3;
order:1;
background-color: #eff5f5;
padding: 2em;
`

const CardHeader = styled.div` 
display: flex;
background-color: #e0ebeb !important;
color: var(--mainBlue) !important ;
justify-content: space-between;
flex-direction: row;
    h1{
    margin-left: 2em;
    font-family: 'Abel', sans-serif;
    font-weight: 400;
    font-size: 40px;  
    }
    p{
    color: grey !important;
    margin-right: 1em;
    margin-top: 3em;  
    }
`

const CardBody = styled.div`
display: flex;
flex-direction: column;
margin: 2em;
    h2{
        font-family: 'Abel', sans-serif !important;
        color: var(--mainBlue) !important;
        font-weight: 300;
        font-size: 30px;
    }
    p{
        font-family: 'Lato', sans-serif !important;
        font-size: 20px;
        font-weight: 400;
    }
`

const  CardBox = styled.div`
display: flex;
flex-direction: column;
margin-top: 3em;
`

const CardBox2 = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
`

const CardRate = styled.div`
    align-self: flex-end;
    padding-top: 2em;
    margin-right: 2em;
`
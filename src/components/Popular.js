import React,{useEffect,useState} from "react";
import axios from "axios"
import {API_KEY} from "./Key"
import "./Top.css"
import { FaRegStar } from "react-icons/fa"
const Popular=(props)=>{

const [data, setdata] = useState([])

 useEffect(() => {
   axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
   .then(response=>{
       setdata(response.data.results)
   })
   .catch(error=>{
       console.log(error)
   })
 }, [])

    return(
        <div>
        <p className="display-1 mb-5 ml-5">Popular Movies</p>
        <div className="row ml-2 mr-2">
        {
            data.map(movie=>

            <div key={movie.id} className="col-sm-12 col-lg-4 col-md-4 mb-5 text-white">
                <div className="card drop">
                    <div className="card-body drop" style={{backgroundImage:`url("https://image.tmdb.org/t/p/w342/${movie.backdrop_path}")`,backgroundSize:"cover",textShadow:"1px 2px 3px black"}}>
                         <h2 className="card-title">{movie.title}</h2>
                         <h5 className="topspacing">Release Date :- {movie.release_date}</h5>
                         <h3 className="">Rating:-<span className="badge badge-warning"><FaRegStar/>{movie.vote_average}</span></h3>
                    </div>
                </div>
             </div>
           )
        }
        </div>
        </div>
    )
}

export default Popular
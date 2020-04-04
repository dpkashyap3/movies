import React,{useState} from 'react';
import axios from "axios"
import {API_KEY} from "./Key"
import {connect} from "react-redux"
import {movies} from "../Redux/Actions"

const Search = (props) =>{ 
    
    const [input, setinput] = useState("")

    const getData=()=>{

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`)
        .then(response=>{
            props.movies(response.data.results)
        })
        .catch(error=>{
            
        })
    } 


    return(
    <div className="input-group input-group-lg ml-5">
        <div className="input-group-prepend">
        <span className="input-group-text ml-1">Search</span>
    </div>
    <input type="text" onChange={(e)=>setinput(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
    <button type="button" onClick={getData} className="btn btn-primary ml-2 btn-lg">Search Your Movie</button>
</div>
)}

export default connect(null,{movies})(Search)
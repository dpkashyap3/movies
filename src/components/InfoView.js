import React from 'react';
import {connect} from "react-redux"
import { FaRegStar } from "react-icons/fa"
const InfoView = (props) =>{ 
    
    return(
        <>
        <p className="display-1 mb-5 ml-5">Search Result</p>
        <div className="row ml-2 mr-2">
        {
            props.movie.map(movie=>

            <div key={movie.id} className="col-sm-12 col-lg-4 col-md-4 mb-5 text-white">
                <div className="card drop">
                    <div className="card-body drop" style={{backgroundImage:`url("https://image.tmdb.org/t/p/w342/${movie.backdrop_path}")`,backgroundSize:"cover",textShadow:"1px 2px 3px black"}}>
                         <h2 className="card-title">{movie.original_title}</h2>
                         <h5 className="topspacing">Release Date :- {movie.release_date}</h5>
                         <h3 className="">Rating:-<span className="badge badge-warning"><FaRegStar/>{movie.vote_average}</span></h3>
                         <button className="btn btn-default"><span className="badge"></span></button>
                    </div>
                </div>
             </div>
           )
        }
        </div>
        </>
)}

const mapStateToProps = state => {
  console.log(state)
  return{
    movie:state.movies
  }
}

export default connect(mapStateToProps,null)(InfoView);
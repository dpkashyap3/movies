import React from 'react';
import Search from "./Search"
import Popular from "./Popular"
import {connect} from "react-redux"
import InfoView from "./InfoView"
import "./Main.css"

const Main = (props) =>{

const showData=()=>{
  if(props.movie[0]){
   return <InfoView/>
  }
  else{
    return <Popular/>
  }
}

  return(
    <div>
    <div class="jumbotron jumbotron-fluid banner">
    <div class="container mb-5">
      <h1 className="heading mt-5">Movie Mania</h1>
      <Search/>
    </div>
  </div>
  {  
    showData()
  }
  </div>
)
};

const mapStateToProps = state => ({
  movie:state.movies
});

export default connect(mapStateToProps,null)(Main)
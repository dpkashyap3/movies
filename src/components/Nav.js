import React from 'react';
import logo from "./logo.png";
import {Link} from "react-router-dom"

const Nav = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container">
        <img src={logo} height="45px" width="70px" alt="Movie Mania"/><span className="navbar-brand ml-2">Movie Mania</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
                <Link className="nav-item nav-link active" to="/">Home</Link>
                <Link className="nav-item nav-link" >Features</Link>
                <Link className="nav-item nav-link" >Pricing</Link>
            </div>
        </div>
      </div>
    </nav>
);

export default Nav;
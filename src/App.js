import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from "react-router-dom"
import Nav from "./components/Nav"
import Main from "./components/Main"
function App() {
  return (
    <Router>
    
      <Nav/>
      <Switch>
      <Main Route="./" exact component={Main}/>
      </Switch>
    </Router>
  );
}

export default App;

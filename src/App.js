import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div>
      <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/home">
        
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

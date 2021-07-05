import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FullPage from './Components/FullPage/FullPage';


function App() {
  return (
    <div>
      <Router>
      <FullPage></FullPage>
      <Switch>
        <Route path="/home">
        
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

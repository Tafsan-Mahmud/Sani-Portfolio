import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FullPage from './Components/FullPage/FullPage';
import SamplePage from './Components/SamplePage/SamplePage';
import MyBlog from './Components/MyBlog/MyBlog';
import BodyDashboard from './Components/Dashboard/BodyDashboard/BodyDashboard';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <FullPage></FullPage>
          </Route>
          <Route path="/home">
            <FullPage></FullPage>
          </Route>
          <Route path="/My-Blog">
            <MyBlog></MyBlog>
          </Route>
          <Route path="/Dashboard">
            <BodyDashboard></BodyDashboard>
          </Route>
          <Route path="/smplePage">
            <SamplePage></SamplePage>
          </Route>
          <Route path="*">
            <SamplePage></SamplePage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

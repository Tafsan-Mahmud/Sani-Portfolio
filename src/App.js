import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FullPage from './Components/FullPage/FullPage';
import SamplePage from './Components/SamplePage/SamplePage';
import MyBlog from './Components/MyBlog/MyBlog';
import BodyDashboard from './Components/Dashboard/BodyDashboard/BodyDashboard';
import Aos from 'aos';
import { useState } from 'react';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageService from './Components/Dashboard/ManageService/ManageService';

export const PageTheme = createContext();

function App() {
  const [mainTheme, setMainTheme] = useState()
  useEffect(() => {
    Aos.init({ duration: 3000 });
}, []);
  return (
    <PageTheme.Provider value={[mainTheme, setMainTheme]}>
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
          <Route path="/make-Admin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/manage-service">
            <ManageService></ManageService>
          </Route>
          <Route path="/smplePage">
            <SamplePage></SamplePage>
          </Route>
          <Route path="*">
            <SamplePage></SamplePage>
          </Route>
        </Switch>
      </Router>
      </PageTheme.Provider>
  );
}

export default App;

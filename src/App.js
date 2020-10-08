import React, {Fragment} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component.jsx";
import AboutPage from "./pages/aboutpage/aboutpage.component.jsx";
import ProjectsPage from "./pages/projectspage/projectspage.component.jsx";
import Header from "./components/header/header.component.jsx";

function App() {
  return (
    <Fragment>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/portfolio" component={ProjectsPage}/>
      </Switch>
    </Fragment>
  )
}

export default App;

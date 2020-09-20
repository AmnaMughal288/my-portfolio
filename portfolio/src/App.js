import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import about from './components/pages/about';
import experiences from './components/pages/experiences';
import home from './components/pages/home';
import contact from './components/pages/contact';
import projects from './components/pages/projects';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route path='/' exact component={home} />
          <Route path='/about' component={about} />
          <Route path='/experiences' component={experiences} />
          <Route path='/projects' component={projects} />
          <Route path='/contact' component={contact} />
    </Switch>
    </Router>
     
    </>
  );
}

export default App;

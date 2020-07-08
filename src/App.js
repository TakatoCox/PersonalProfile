import React from 'react';
import Header from './Header/header'
import AppMain from './HomePage/appMain';
import About from './AboutPage/about'
import "./App.css"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from './Contact/contact';
import Projects from './Projects/projects';
import Clocks from './ClockFolder/Clocks';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/Personal/Profile/" exact component={AppMain}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Clocks/>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Blog from './components/Blog';
import { Button } from '@material-ui/core';
import Mentor from './components/Mentor';
import Work from './components/Work';
import Footer from './components/Footer';
import Home from './components/Home';
import Hero from './components/Hero';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/blog' exact>
            <Blog />
          </Route>
          <Route path='/project' exact>
            <Project />
          </Route>
          <Route path='/mentor' exact>
            <Mentor />
          </Route>
          <Route path='/work' exact>
            <Work />
          </Route>
          <Route path='/' className='app__home'>
            <Hero />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

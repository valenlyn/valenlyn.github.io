import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './nav/nav.js';
import Work from './work/work.js';
import About from './about/about.js';
import Contact from './contact/contact.js';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
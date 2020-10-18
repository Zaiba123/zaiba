import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Work from './components/Work';
import Projects from './components/Projects';
import Goals from './components/Goals';

function App() {
  return (
    <Router>
    <div>
    <Switch>
        <Route exact path="/">
          <Work />
        </Route>
        <Route path="/project">
          <Projects />
        </Route>
        <Route path="/goals">
          <Goals />
        </Route>
    </Switch>
  </div>
  </Router>
  );
}

export default App;

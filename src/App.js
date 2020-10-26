import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Goals from './pages/Goals';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
    <div>
    <Switch>
        <Route exact path="/">
          <Home />
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

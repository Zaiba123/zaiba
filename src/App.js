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
import Navigation from './Layout/Navigation';

function App() {
  return (
  //   <Router>
  //   <div>
  //   <Switch>
  //       <Route exact path="/">
  //         <Home />
  //       </Route>
  //       <Route path="/project">
  //           <Projects />
  //       </Route>
  //       <Route path="/goals">
  //         <Goals />
  //       </Route>
  //   </Switch>
  // </div>
  // </Router>
  <div>
    <Navigation style={{position:"fixed", zIndex:100}}/>
    <Home/>
  </div>
  );
}

export default App;

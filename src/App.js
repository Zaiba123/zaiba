import React from 'react'
// import './App.css';
import Home from './pages/Home';
import Navigation from './Layout/Navigation';

function App() {
  return (
  <div>
    <Navigation style={{position:"fixed", zIndex:100}}/>
    <Home/>
  </div>
  );
}

export default App;

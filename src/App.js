import React from 'react'
import Navigation from './Layout/Navigation/Navigation';
import Home from './pages/Home';

function App() {
  return (
  <div>
    <Navigation style={{position:"fixed", zIndex:100}}/>
    <Home/>
  </div>
  );
}

export default App;

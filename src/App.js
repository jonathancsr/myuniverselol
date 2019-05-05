import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import Index from './componentes/IndexPage/LoginAndRegister'
import World from './componentes/World/world'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Index} />
        <Route path='/MyWorld' component={World} />
        <Index />
      </div>
    </BrowserRouter>
  );
}

export default App;

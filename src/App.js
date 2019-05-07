import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import Index from './componentes/IndexPage/LoginAndRegister'
import World from './componentes/World/containerWorld'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Index} />
        <Route path='/MyWorld' component={World} />
      </div>
    </BrowserRouter>
  );
}

export default App;

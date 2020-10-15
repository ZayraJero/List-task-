import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' 

import './App.css';
import NavBar from './components/NavBar';
import Main from './container/Main';
import About from './container/About';
import Create from './container/Create';

function App() {
  return (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter> 
  );
}

export default App;
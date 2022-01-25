import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './pages/About';
import Crypto from './pages/Crypto';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/a-propos" exact component={About} />
      <Route path="/crypto" exact component={Crypto} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;
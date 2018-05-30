import React, { Component } from 'react';
import { Route,Switch } from "react-router-dom";
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
      </Switch>
    );
  }
}

export default App;

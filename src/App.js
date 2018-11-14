import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import history from './config/history';

// Pages
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
};

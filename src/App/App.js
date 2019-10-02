import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import Home from 'Views/Home';
import { Jobs } from 'Views/Jobs'
import { News } from 'Views/News'


class App extends Component {

  constructor(props) {
    super(props);

    this.history = createBrowserHistory();
  }


  render() {
    return (
      <Router history={this.history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/jobs" component={Jobs} />
        </Switch>
      </Router>
    );
  }
}



export default App;
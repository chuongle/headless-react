import React, { Component } from 'react';
import MainLayout from './components/MainLayout';
import CommunityFull from './components/community/CommunityFull';
import Communities from './components/community/Communities';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <Route exact path="/" component={MainLayout} />
          
        </div>
      </Router>
    );
  }
}

export default Routes;
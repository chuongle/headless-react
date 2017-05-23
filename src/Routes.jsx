import React, { Component } from 'react';
import MainLayout from './components/MainLayout';
import CommunityFull from './components/community/CommunityFull';
import Communities from './components/community/Communities';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <MainLayout>
          <Route path="/communities" component={Communities} />
          <Route path="/entity/:nid" component={CommunityFull} />
        </MainLayout>
      </Router>
    );
  }
}

export default Routes;

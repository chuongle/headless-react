import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CommunityFull from './community/CommunityFull';
import Communities from './community/Communities';

class MainLayout extends Component {

  render() {
    return (
      <div className="container">
        <Router>
          <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/communities">Communities</Link></li>
          </ul>
          <Route exact path="/communities" component={Communities} />
          <Route path="/entity/:nid" component={CommunityFull} />
          </div>
        </Router>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default MainLayout;

import React, { Component } from 'react';
import MainLayout from './components/MainLayout';
import CommunityFull from './components/community/CommunityFull';
import Communities from './components/community/Communities';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { gql, graphql } from 'react-apollo';

class Routes extends Component {
  // render() {
  //   return (
  //     <Router history={browserHistory}>
  //       <MainLayout>
  //         <Route path="/communities" component={Communities} />
  //         <Route path="/entity/:nid" component={CommunityFull} />
  //       </MainLayout>
  //     </Router>
  //   );
  // }
  renderRoutes() {
    return this.props.data.nodeQuery.entities.map((entity) => {
      return <Route key={entity.entityId} path={entity.entityUrl.alias} component={CommunityFull} />
    });
  }

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      return (<div>An unexpected error occurred</div>)
    }
    
    return (
      <Router history={browserHistory}>
        <MainLayout>
          <Route path="/communities" component={Communities} />
          {this.renderRoutes()}
        </MainLayout>
      </Router>
    )
  }
}

// export default Routes;
export default graphql(gql`query {
  nodeQuery(filter: {type: "community"}) {
    entities {
      ...on NodeCommunity {
        entityId
        entityUrl {
          path
          alias
        }
      }
    }
  }
}`)(Routes)

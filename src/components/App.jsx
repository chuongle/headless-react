import React, { Component } from 'react';
import Communities from './community/Communities';
import { ApolloClient, ApolloProvider, createNetworkInterface, gql, graphql } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://headless-server.herokuapp.com/graphql',
    opts: {
      credentials: 'same-origin',
    },
  }),
});

const CommunitiesData = graphql(gql`{
  communities {
    nid
    title
  }
}`)(Communities)

class App extends Component {

  render() {
  	return (
      <ApolloProvider client={client}>
        <CommunitiesData />
      </ApolloProvider>
  	)
  }
}

export default App;

import { ApolloClient, createNetworkInterface, gql, graphql } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: process.env.DRUPAL_URL + process.env.GRAPHQL_URL,
  }),
});

export default client;
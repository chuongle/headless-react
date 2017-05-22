import React, { Component } from 'react';
import Routes from './Routes';
import MainLayout from './components/MainLayout';
import { BrowserRouter as Link } from 'react-router-dom';
import client from './client';
import { ApolloProvider } from 'react-apollo';

class App extends Component {

  render() {
  	return (
      <ApolloProvider client={client}>
        <div>
          <Routes />
          {this.props.children}
        </div>
      </ApolloProvider>
  	)
  }
}

export default App;

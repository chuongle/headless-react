import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

class CommunityFull extends Component {
  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      return (<div>An unexpected error occurred</div>)
    }
    return (
      <div className="community">
      <h1>{this.props.data.onlyNodeWithId.entities[0].title}</h1>
      <div
      className="description"
      dangerouslySetInnerHTML={{__html: this.props.data.onlyNodeWithId.entities[0].body}}/>
      </div>
    )
  }
}


CommunityFull.propTypes = {
  nid: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string
}

const query = gql`query($id: Int) {
  onlyNodeWithId:nodeQuery(nid: $id) {
    entities {
      ...on NodeArticle {
        title
        body
      }
    }
  }
}`;

export default graphql(query, {
  options: ({match}) => ({ variables: { id: match.params.nid } })
})( CommunityFull );

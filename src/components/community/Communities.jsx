import React, { Component } from 'react';
import CommunityCard from './CommunityCard';
import { gql, graphql } from 'react-apollo';

class Communities extends Component {

	renderCommunities() {
    return this.props.data.nodeQuery.entities.map((entity) => (
      <CommunityCard 
      key={entity.entityId} 
      title={entity.title} 
      nid={entity.entityId}
      body={entity.body}
      url={entity.entityUrl.alias} />
    ));
  }

  render() {
    console.log('hit');
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      return (<div>An unexpected error occurred</div>)
    }

		return (
			<div className="wrapper">
				{this.renderCommunities()}
			</div>
		)
  }
}

// export default Communities;
export default graphql(gql`{
  nodeQuery {
    entities {
      ... on NodeArticle {
        entityId
        title
        fieldImage
        body
        entityUrl {
          routed
          path
          alias
        }
      }
    }
  }
}`)(Communities)
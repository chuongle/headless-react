import React, { Component } from 'react';
import CommunityCard from './CommunityCard';
import { gql, graphql } from 'react-apollo';

class Communities extends Component {

	renderCommunities() {
    return this.props.data.nodeQuery.entities.map((entity) => (
      <CommunityCard
      key={entity.fieldOneSiteId}
      title={entity.title}
      nid={entity.entityId}
      address={entity.fieldAddress}
      phone={entity.fieldPhone}
      image={entity.fieldImage}
      url={entity.entityUrl.path} />
    ));
  }

  render() {
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
export default graphql(gql`query {
  nodeQuery(filter: {type: "community"}) {
    entities {
      ...on NodeCommunity {
        entityId
        title
        fieldOneSiteId
        fieldPhone
        fieldAddress
        entityUrl {
          path
          alias
        }
      }
    }
  }
}`)(Communities)

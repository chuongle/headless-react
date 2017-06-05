import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

class CommunityFull extends Component {

  renderPets(pets) {
    return pets.map((pet) => {
      return <div key={pet.entityId}>{pet.entityLabel}</div>
    })
  }

  renderPlans(plans) {
    return plans.map((plan, index) => {
      return <div key={index} dangerouslySetInnerHTML={{ __html: plan }}></div>
    })
  }

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      return (<div>An unexpected error occurred</div>)
    }

    const entity = this.props.data.route.entity;

    return (
      <div className="community">
        <h1>{entity.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: entity.fieldAddress }}/>
        <div>{entity.fieldPhone}</div>
        <div>{this.renderPets(entity.fieldPets)}</div>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: entity.body}}/>
        <div 
          className="header-image"
          dangerouslySetInnerHTML={{ __html: entity.fieldImage }}/>
        <div>{this.renderPlans(entity.fieldPlans)}</div>
      </div>
    )
  }
}


CommunityFull.propTypes = {
  nid: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string
}

const query = gql`query ($path: String!) {
  route:route(path: $path) {
    entity {
      ... on NodeCommunity {
        entityId
        title
        body
        fieldImage
        fieldOneSiteId
        fieldPhone
        fieldAddress
        fieldPlans
        fieldPets {
          entityLabel
          entityId
        }
      }
    }
  }
}`;

export default graphql(query, {
  options: ({match}) => ({ variables: { path: match.path } })
})( CommunityFull );

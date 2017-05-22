import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

class CommunityFull extends Component {
  // constructor() {
  //   super();
  //   this.state = { 
  //     title: '',
  //     body: '' 
  //   };
  // }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps !== undefined)
  //     return

  //   const CommunitiesData = graphql(gql`{
  //     nodeQuery {
  //       entities {
  //         ... on NodeArticle {
  //           entityId
  //           title
  //           fieldImage
  //           body
  //           entityUrl {
  //             routed
  //             path
  //             alias
  //           }
  //         }
  //       }
  //     }
  //   }`)(Communities)

  // }

  render() {
  	return (
  		<div className="community">
  			<h1>{this.props.title}</h1>
        <div
          className="description"
          dangerouslySetInnerHTML={{__html: this.props.body}}/>
  		</div>
  	)
  }
}


CommunityFull.propTypes = {
	nid: PropTypes.number,
	title: PropTypes.string,
	body: PropTypes.string
}

const query = gql`{
  nodeQuery(nid: $nid) {
    entities {
      ...on NodeArticle {
        title
        body
      }
    }
  }
}`;

export default graphql(query, {
  options: ({match}) => ({ variables: { nid: match.params.nid } })
})( CommunityFull );
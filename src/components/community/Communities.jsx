import React, { Component } from 'react';
import Community from './Community';
import PropTypes from 'prop-types';

class Communities extends Component {

	renderCommunities() {
    return this.props.data.communities.map((community) => (
      <Community key={community.nid} title={community.title} nid={community.nid} />
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

export default Communities;
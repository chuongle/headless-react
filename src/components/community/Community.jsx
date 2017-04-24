import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Community extends Component {
  render() {
  	return (
  		<div className="community-card">
  			<h3>Community Title: {this.props.title}</h3>
  			<h4>Community NID: {this.props.nid}</h4>
  		</div>
  	)
  }
}

export default Community;

Community.propTypes = {
	nid: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string
}
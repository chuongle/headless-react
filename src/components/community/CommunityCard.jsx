import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class CommunityCard extends Component {

  render() {
    return (
      <div className="community-card">
        <h2>{ this.props.title }</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.address }}/>
        <div>{ this.props.phone }</div>
        <Link to={ this.props.url }>Read More</Link>
      </div>
    )
  }
}

export default CommunityCard;

CommunityCard.propTypes = {
  nid: PropTypes.number,
  address: PropTypes.string,
  url: PropTypes.string,
  phone: PropTypes.string
}

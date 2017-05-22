import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class CommunityCard extends Component {

  render() {
    return (
      <div className="community-card">
        <h2>{this.props.title}</h2>
        <div
          className="description"
          dangerouslySetInnerHTML={{__html: this.props.body}}/>
          <Link to={`/entity/${ this.props.nid }`}>{this.props.title}</Link>
      </div>
    )
  }
}

export default CommunityCard;

CommunityCard.propTypes = {
  nid: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string
}

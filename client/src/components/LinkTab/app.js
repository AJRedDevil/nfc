// npm packages
import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

const getLink = props =>
  props.match.path.endsWith('/')
    ? `${props.match.path}${props.link.path}`
    : `${props.match.path}/${props.link.path}`;

const activateCurrent = props =>
  getLink(props) === props.location.pathname ? 'is-active' : '';

const LinkTab = props => (
  <li className={activateCurrent(props)}>
    <Link to={getLink(props)}>{props.link.text}</Link>
  </li>
);
LinkTab.propTypes = {
  link: PropTypes.shape({
    path: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default withRouter(LinkTab);

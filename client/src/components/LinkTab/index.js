// npm packages
import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';

export const getLink = props =>
  props.match.path.endsWith('/')
    ? `${props.match.path}${props.link.path}`
    : `${props.match.path}/${props.link.path}`;

export const activateCurrent = props =>
  props.currentTab === props.link.path ? 'is-active' : '';

export const LinkTab = props => (
  <li className={activateCurrent(props)}>
    <NavLink
      activeClassName={activateCurrent(props)}
      to={getLink(props)}
      onClick={props.onTabClick}
      identifier={props.link.path}
    >
      {props.link.text}
    </NavLink>
  </li>
);
LinkTab.propTypes = {
  link: PropTypes.shape({
    path: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  onTabClick: PropTypes.func,
};

export default withRouter(LinkTab);

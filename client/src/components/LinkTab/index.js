// npm packages
import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';

// our packages
import {Logger} from '../../utils';

const getLink = props =>
  props.match.path.endsWith('/')
    ? `${props.match.path}${props.link.path}`
    : `${props.match.path}/${props.link.path}`;

const activateCurrent = props => {
  Logger.info(props, 'LinkTab');
  return props.currentTab === props.link.path ? 'is-active' : '';
};

const LinkTab = props => (
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

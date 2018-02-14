// npm packages
import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

const linkPaths = [
  ['/', 'Dashboard'],
  ['/classicleague', 'Classic League'],
  ['/h2hleague', 'H2H League'],
];

const activateCurrent = props =>
  props.linkPath === props.location.pathname ? 'is-active' : '';

const LinkTab = props => (
  <li className={activateCurrent(props)}>
    <Link to={props.linkPath}>{props.text}</Link>
  </li>
);
LinkTab.propTypes = {
  linkPath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const LinkTabWithRouter = withRouter(LinkTab);

const Navigation = () => (
  <div className="tabs is-boxed">
    <ul>
      {linkPaths.map(linkPath => (
        <LinkTabWithRouter
          key={linkPath[1]}
          linkPath={linkPath[0]}
          text={linkPath[1]}
        />
      ))}
    </ul>
  </div>
);

export default Navigation;

// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const linkPaths = {
  DASHBOARD: '/',
  CLASSICLEAGUE: '/classicleague',
  H2HLEAGUE: '/h2hleague',
};

const getFirstPath = urlPath => `/${urlPath.split('/')[1]}`;

const LinkTab = props => {
  const isActive = props.currentPath === props.linkPath;
  const className = isActive ? 'is-active' : '';
  const {onTabClick} = props;
  return (
    <li className={className}>
      <Link to={props.linkPath} onClick={onTabClick}>
        {props.text}
      </Link>
    </li>
  );
};
LinkTab.propTypes = {
  currentPath: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

class Navigation extends Component {
  handleTabClick = e => {
    const currentPath = e.target.getAttribute('href');
    this.setState({
      ...this.state,
      currentPath,
    });
  };

  render() {
    const currentPath = getFirstPath(this.props.router.location.pathname);
    return (
      <div className="tabs is-boxed">
        <ul>
          <LinkTab
            linkPath={linkPaths.DASHBOARD}
            text="Dashboard"
            currentPath={currentPath}
            onTabClick={this.handleTabClick}
          />
          <LinkTab
            linkPath={linkPaths.CLASSICLEAGUE}
            text="Classic League"
            currentPath={currentPath}
            onTabClick={this.handleTabClick}
          />
          <LinkTab
            linkPath={linkPaths.H2HLEAGUE}
            text="H2H League"
            currentPath={currentPath}
            onTabClick={this.handleTabClick}
          />
        </ul>
      </div>
    );
  }
}
Navigation.propTypes = {
  router: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      key: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  router: state.router,
});

export default connect(mapStateToProps, {})(Navigation);

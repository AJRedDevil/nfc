// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// our packages
import LinkTab from '../../components/LinkTab';

const NAVIGATION_LINKS = [
  {path: '', text: 'Dashboard'},
  {path: 'classicleague', text: 'Classic League'},
  {path: 'h2hleague', text: 'H2H League'},
];

class Navigation extends Component {
  state = {currentTab: this.props.router.location.pathname.split('/')[1]};

  handleTabClick = e => {
    const currentTab = e.target.getAttribute('identifier');
    this.setState({
      ...this.state,
      currentTab,
    });
  };

  render() {
    return (
      <div className="tabs">
        <ul>
          {NAVIGATION_LINKS.map(link => (
            <LinkTab
              key={link.text}
              link={link}
              currentTab={this.state.currentTab}
              onTabClick={this.handleTabClick}
            />
          ))}
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
  }),
};

const mapStateToProps = state => ({
  router: state.router,
});

export default connect(mapStateToProps)(Navigation);

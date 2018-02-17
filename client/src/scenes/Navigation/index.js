// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// our packages
import LinkTab from '../../components/LinkTab';
import {setRoute} from '../../services/navigation/actions';

const NAVIGATION_LINKS = [
  {path: '', text: 'Dashboard'},
  {path: 'classicleague', text: 'Classic League'},
  {path: 'h2hleague', text: 'H2H League'},
];

class Navigation extends Component {
  handleTabClick = e => {
    const nextTab = e.target.getAttribute('identifier');
    this.props.setCurrentTab(nextTab);
  };

  render() {
    return (
      <div className="tabs">
        <ul>
          {NAVIGATION_LINKS.map(link => (
            <LinkTab
              key={link.text}
              link={link}
              currentTab={this.props.navigation.currentTab}
              onTabClick={this.handleTabClick}
            />
          ))}
        </ul>
      </div>
    );
  }
}
Navigation.propTypes = {
  navigation: PropTypes.shape({
    currentTab: PropTypes.string,
  }),
  setCurrentTab: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  navigation: state.Navigation,
  router: state.router,
});

const mapDispatchToProps = dispatch => ({
  setCurrentTab: nextRoute => dispatch(setRoute(nextRoute)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// our packages
import LinkTab from '../../components/LinkTab';

const makePath = text =>
  text
    .split(' ')
    .join('')
    .toLowerCase();

const getLinks = leagueNames =>
  leagueNames.map(leagueName => ({
    path: makePath(leagueName),
    text: leagueName,
  }));

class H2HTitle extends Component {
  state = {currentTab: '', links: []};

  componentWillMount() {
    const links = getLinks(this.props.leagueNames);
    this.setState({
      links,
      currentTab: links[0].path,
    });
  }

  handleTabClick = e => {
    const currentTab = e.target.getAttribute('identifier');
    this.setState({
      ...this.state,
      currentTab,
    });
  };

  render() {
    const {links} = this.state;
    return (
      <div className="tabs">
        <ul>
          {links &&
            links.map(link => (
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
H2HTitle.propTypes = {
  leagueNames: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default H2HTitle;

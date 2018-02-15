// npm packages
import React, {Component} from 'react';

// our packages
import LinkTab from '../../components/LinkTab';

const NAVIGATION_LINKS = [
  {path: '', text: 'Dashboard'},
  {path: 'classicleague', text: 'Classic League'},
  {path: 'h2hleague', text: 'H2H League'},
];

class Navigation extends Component {
  state = {currentTab: ''};

  componentWillMount() {
    this.setState({currentTab: NAVIGATION_LINKS[0].path});
  }

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

export default Navigation;

// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// our packages
import LinkTab from '../../components/LinkTab';

class H2HTitle extends Component {
  state = {currentTab: this.props.links[0].path};

  handleTabClick = e => {
    const currentTab = e.target.getAttribute('identifier');
    this.setState({
      ...this.state,
      currentTab,
    });
  };

  render() {
    const {links} = this.props;
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
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default H2HTitle;

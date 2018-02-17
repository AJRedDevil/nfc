// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// our packages
import LinkTab from '../../components/LinkTab';

class H2HTitle extends Component {
  handleTabClick = e => {
    const nextTab = e.target.getAttribute('identifier');
    this.props.setNextTab(nextTab);
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
                currentTab={this.props.currentTab}
                onTabClick={this.handleTabClick}
              />
            ))}
        </ul>
      </div>
    );
  }
}
H2HTitle.propTypes = {
  currentTab: PropTypes.string,
  setNextTab: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default H2HTitle;

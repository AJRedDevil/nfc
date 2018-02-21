// npm packages
import React from 'react';
import PropTypes from 'prop-types';

// our packages
import {DateHelper} from '../../utils';

const LeagueTitle = ({leagueName, creationDate}) => (
  <div>
    <h1 className="title">{leagueName}</h1>
    <h2 className="subtitle">
      Created : {DateHelper.ISOToDateString(creationDate)}
    </h2>
  </div>
);
LeagueTitle.propTypes = {
  leagueName: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
};

export default LeagueTitle;

// npm packages
import React from 'react';

// our packages
import Animation from '../../components/animations';
import Table from '../../components/Table';
import LeagueStandingsPropTypes from './PropTypes';

const LeagueStandings = ({head, standings}) => (
  <Animation.Fade in>
    <div>
      <Table body={standings} head={head} />
    </div>
  </Animation.Fade>
);
LeagueStandings.propTypes = {
  head: LeagueStandingsPropTypes.head,
  standings: LeagueStandingsPropTypes.body,
};

export default LeagueStandings;

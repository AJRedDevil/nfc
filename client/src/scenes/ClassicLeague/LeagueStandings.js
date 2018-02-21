// npm packages
import React from 'react';

// our packages
import Animation from '../../components/animations';
import Table from '../../components/Table';
import LeagueStandingsPropTypes from './PropTypes';

export const getBody = standings =>
  standings.map(item => [
    item.rank,
    item.entry_name,
    item.player_name,
    item.event_total,
    item.total,
  ]);

const LeagueStandings = ({head, standings}) => (
  <Animation.Fade in>
    <div>
      <Table body={getBody(standings)} head={head} />
    </div>
  </Animation.Fade>
);
LeagueStandings.propTypes = {
  head: LeagueStandingsPropTypes.head,
  standings: LeagueStandingsPropTypes.body,
};

export default LeagueStandings;

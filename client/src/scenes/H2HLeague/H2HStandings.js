// npm packages
import React from 'react';

// our packages
import Animation from '../../components/animations';
import Table from '../../components/Table';
import H2HStandingsPropTypes from './PropTypes';

const getBody = standings =>
  standings.map(item => [
    item.rank,
    item.entry_name,
    item.player_name,
    item.matches_won,
    item.matches_drawn,
    item.matches_lost,
    item.points_for,
    item.points_total,
  ]);

const H2HStandings = ({head, standings}) => (
  <Animation.Fade in>
    <div>
      <Table body={getBody(standings[0])} head={head} />
    </div>
  </Animation.Fade>
);
H2HStandings.propTypes = {
  head: H2HStandingsPropTypes.head,
  standings: H2HStandingsPropTypes.body,
};

export default H2HStandings;

// npm packages
import {flow, orderBy} from 'lodash';

// our packages
import {getGroupedScore} from '../h2h/util';

const prettifyStandings = standings => ({
  lastFetched: new Date().toISOString(),
  gameweek: standings[0].gameweek,
  standings: standings.map(player => [
    player.division,
    player.entry_name,
    player.player_name,
    player.event_total,
  ]),
});

const sortStandings = standings => orderBy(standings, 'event_total', 'desc');

const getStandings = h2hLeaguesData =>
  h2hLeaguesData.reduce((gwOverall, h2hDivisionData) => {
    const division = h2hDivisionData.league.name;
    const gameweek = h2hDivisionData.matches_this.results[0].event;
    /** @type Object[] */
    const leagueData = Object.values(getGroupedScore({...h2hDivisionData}));
    return gwOverall.concat(
      leagueData.reduce(
        (league, players) => [
          ...league,
          ...players.map(player => ({
            division,
            gameweek,
            entry_name: player.entry_name,
            player_name: player.player_name,
            event_total: player.event_total,
          })),
        ],
        []
      )
    );
  }, []);

const getOverallStandings = flow(
  getStandings,
  sortStandings,
  prettifyStandings
);

export default {getOverallStandings};

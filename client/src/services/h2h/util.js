// npm packages
import {flow, groupBy, orderBy} from 'lodash';

const getResults = h2hResponse => h2hResponse.matches_this.results;
const getHomeIndividualResult = result => ({
  event_total: result.entry_1_points,
  entry_name: result.entry_1_name,
  player_name: result.entry_1_player_name,
});
const getAwayIndividualResult = result => ({
  event_total: result.entry_2_points,
  entry_name: result.entry_2_name,
  player_name: result.entry_2_player_name,
});
const getWeekResults = results =>
  results.reduce(
    (weekResults, item) => [
      ...weekResults,
      getHomeIndividualResult(item),
      getAwayIndividualResult(item),
    ],
    []
  );
const getSortedResult = weekResults =>
  orderBy(weekResults, 'event_total', 'desc');
const groupScore = sortedResult => groupBy(sortedResult, 'event_total');
const getGroupedScore = flow(
  getResults,
  getWeekResults,
  getSortedResult,
  groupScore
);
const getTop = grouped => {
  const topScore = Object.keys(grouped).slice(-1)[0];
  return grouped[topScore];
};
const getAllStandings = h2hStandings =>
  h2hStandings.reduce(
    (standings, divisionStandings) =>
      Object.assign({...standings, ...divisionStandings}),
    {}
  );

const getH2HWinners = h2hStandings => {
  const allStandings = getAllStandings(h2hStandings);
  const result = Object.keys(allStandings).reduce((winners, division) => {
    const divisionStandings = allStandings[division];
    const divisionWinners = getTop(getGroupedScore(divisionStandings));
    return winners.concat(
      divisionWinners.map(winner => [
        division,
        winner.entry_name,
        winner.player_name,
        winner.event_total,
      ])
    );
  }, []);
  return result;
};

export default {getH2HWinners};

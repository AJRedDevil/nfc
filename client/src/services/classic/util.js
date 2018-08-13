// npm packages
import {flow, groupBy, orderBy} from 'lodash';

export const getLeagueInfo = standings => ({
  leagueName: standings[0].league.name,
  creationDate: standings[0].league.created,
  lastFetched: new Date().toISOString(),
});
export const getResults = standings =>
  standings.reduce((acc, item) => [...acc, ...item.standings.results], []);
export const getSortedResult = results =>
  orderBy(results, 'event_total', 'desc');
const groupScore = sortedResult => groupBy(sortedResult, 'event_total');
export const getGroupedScore = flow(getResults, getSortedResult, groupScore);
export const getTop5 = grouped => {
  const top5Score = Object.keys(grouped)
    .slice(-5)
    .reverse();
  return top5Score.map(score => grouped[score]);
};
const filterPlayerData = (player, index) => [
  index + 1,
  player.entry_name,
  player.player_name,
  player.event_total,
];
const filterTableData = rows =>
  rows.reduce(
    (acc, row, index) => [
      ...acc,
      ...row.map(player => filterPlayerData(player, index)),
    ],
    []
  );

const getClassicWinners = classicStandings => {
  const winners = flow(getGroupedScore, getTop5, filterTableData);
  return winners(classicStandings);
};
const getStandings = standings =>
  Object.assign({}, getLeagueInfo(standings), {
    standings: getResults(standings),
  });

export default {getClassicWinners, getStandings};

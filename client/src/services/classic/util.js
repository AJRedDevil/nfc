// npm packages
import {flow, groupBy, orderBy} from 'lodash';

const getResults = standings =>
  standings.reduce((acc, item) => [...acc, ...item.standings.results], []);
const getSortedResult = results => orderBy(results, 'event_total', 'desc');
const groupScore = sortedResult => groupBy(sortedResult, 'event_total');
const getGroupedScore = flow(getResults, getSortedResult, groupScore);
const getTop3 = grouped => {
  const top3Score = Object.keys(grouped)
    .slice(-3)
    .reverse();
  return top3Score.map(score => grouped[score]);
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
  const winners = flow(getGroupedScore, getTop3, filterTableData);
  return winners(classicStandings);
}

export default {getClassicWinners};

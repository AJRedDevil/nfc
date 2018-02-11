// npm packages
import {flow, groupBy, orderBy} from 'lodash';

// our packages
import head from '../../scenes/Dashboard/components/ClassicTable/head.json';
import NFC_CONFIG from '../config/nfc.json';

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

// TODO: Remove the dependency on localhost
const API = (url => ({
  getTop3: () =>
    fetch(url)
      .then(response => response.json())
      .then(standings => getGroupedScore(standings))
      .then(grouped => getTop3(grouped))
      .then(top3Players => filterTableData(top3Players))
      .then(body => ({
        head,
        body,
      }))
      .catch(error => console.error(error)),
}))(`http://localhost:3000/classic/${NFC_CONFIG.CLASSIC}`);

export default API;

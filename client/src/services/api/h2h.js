// npm packages
import {flow, groupBy, orderBy} from 'lodash';

// our packages
import head from '../../scenes/Dashboard/components/H2HTable/head.json';
import NFC_CONFIG from '../config/nfc.json';

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

const getH2HWinner = (division, url) =>
  fetch(url)
    .then(response => response.json())
    .then(h2hResponse => getGroupedScore(h2hResponse))
    .then(grouped => getTop(grouped))
    .then(winnerList =>
      winnerList.reduce(
        (acc, winner) =>
          acc.concat([
            division,
            winner.entry_name,
            winner.player_name,
            winner.event_total,
          ]),
        []
      )
    )
    .catch(error => console.error(error));

const getBody = (leagues, url) =>
  leagues.map(item => {
    const h2hURL = `${url}/${item.leagueID}`;
    const winner = getH2HWinner(item.division, h2hURL);
    return winner;
  }, []);

//  TODO: Remove the dependency on localhost
const API = ((leagues, url) => ({
  getHeadings: () => head,
  getWinners: () => Promise.all(getBody(leagues, url)),
}))(NFC_CONFIG.H2H, 'http://localhost:3000/h2h');

export default API;

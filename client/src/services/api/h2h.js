// npm packages
import {first, flow, orderBy} from 'lodash';

// our packages
import head from '../../scenes/Home/components/H2HTable/head.json';
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
const getSortedResults = weekResults =>
  orderBy(weekResults, 'event_total', 'desc');
const getTop = flow(getResults, getWeekResults, getSortedResults, first);

const getH2HWinner = (division, url) =>
  fetch(url)
    .then(response => response.json())
    .then(h2hResponse => getTop(h2hResponse))
    .then(winner => [
      division,
      winner.entry_name,
      winner.player_name,
      winner.event_total,
    ])
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

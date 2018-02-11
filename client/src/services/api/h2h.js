// our packages
import NFC_CONFIG from '../config/nfc.json';

const getH2HUrl = url => item => `${url}/${item.leagueID}`;

const getData = url =>
  fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));

const fetchH2HStandingsData = (leagues, h2hURL) =>
  leagues.map(item =>
    getData(h2hURL(item))
      .then(response => ({[item.division]: response}))
      .catch(error => console.error(error))
  );

//  TODO: Remove the dependency on localhost
const API = ((leagues, url) => ({
  getH2HStandings: () =>
    Promise.all(fetchH2HStandingsData(leagues, getH2HUrl(url))),
}))(NFC_CONFIG.H2H, 'http://localhost:3000/h2h');

export default API;

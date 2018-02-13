// our packages
import NFC_CONFIG from '../config/nfc.json';

const getH2HUrl = url => id => `${url}/${id}`;

const getData = url =>
  fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));

const fetchH2HStandingsData = (leagueIDs, h2hURL) =>
  leagueIDs.map(leagueID =>
    getData(h2hURL(leagueID))
      .then(response => response)
      .catch(error => console.error(error))
  );

//  TODO: Remove the dependency on localhost
const API = ((leagues, url) => ({
  getH2HStandings: () =>
    Promise.all(fetchH2HStandingsData(leagues, getH2HUrl(url))),
}))(NFC_CONFIG.H2H, 'http://localhost:3000/h2h');

export default API;

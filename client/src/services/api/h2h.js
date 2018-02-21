// our packages
import NFC_CONFIG from '../config/nfc.json';

export const getH2HUrl = url => id => `${url}/${id}`;

export const getData = url =>
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
}))(NFC_CONFIG.H2H, `${process.env.API_HOST}/h2h`);

export default API;

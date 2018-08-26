// our packages
import NFC_CONFIG from '../config/nfc.json';

const h2hIds = JSON.stringify(NFC_CONFIG.H2H);

// TODO: Remove the dependency on localhost
const API = (url => ({
  getGwOverallStandings: () =>
    fetch(url)
      .then(response => response.json())
      .catch(error => console.error(error)),
}))(`${process.env.API_HOST}/gwtable/${h2hIds}`);

export default API;

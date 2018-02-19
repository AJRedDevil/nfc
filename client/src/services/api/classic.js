// our packages
import NFC_CONFIG from '../config/nfc.json';

// TODO: Remove the dependency on localhost
const API = (url => ({
  getClassicStandings: () =>
    fetch(url)
      .then(response => response.json())
      .catch(error => console.error(error)),
}))(`${process.env.API_HOST}/classic/${NFC_CONFIG.CLASSIC}`);

export default API;

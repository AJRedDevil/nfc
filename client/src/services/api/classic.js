// npm packages
import {flow, orderBy} from 'lodash';

// our packages
import head from '../../scenes/Home/components/ClassicTable/head.json';
import NFC_CONFIG from '../config/nfc.json';

const getResults = standings =>
  standings.reduce((acc, item) => [...acc, ...item.standings.results], []);
const getSortedResult = results => orderBy(results, 'event_total', 'desc');
const first3 = arr => arr.slice(0, 3);
const getTop3 = flow(getResults, getSortedResult, first3);

const filterTableData = rows =>
  rows.map((row, index) => [
    index + 1,
    row.entry_name,
    row.player_name,
    row.event_total,
  ]);

// TODO: Remove the dependency on localhost
const API = (url => ({
  getTop3: () =>
    fetch(url)
      .then(response => response.json())
      .then(standings => getTop3(standings))
      .then(top3 => filterTableData(top3))
      .then(body => ({
        head,
        body,
      }))
      .catch(error => console.error(error)),
}))(`http://localhost:3000/classic/${NFC_CONFIG.CLASSIC}`);

export default API;

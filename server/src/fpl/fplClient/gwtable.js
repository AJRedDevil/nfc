// our packages
const {fetchH2HStandings} = require('./h2h');
const {getLogger} = require('../../util');

const logger = getLogger(__filename);

const fetchGwOverallStandings = h2hIds => {
  const allH2HRequest = h2hIds.map(id => fetchH2HStandings(id));
  return Promise.all(allH2HRequest)
    .then(response => response)
    .catch(err => {
      logger.error(err);
      return Error('Issue in GW Overall Standings.');
    });
};

module.exports = {fetchGwOverallStandings};

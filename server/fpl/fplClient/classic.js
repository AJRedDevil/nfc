// npm packages
const {flow} = require('lodash');
const rp = require('request-promise');

// our packages
const {getClassicURL} = require('../fplUri');
const {getJSONOptions, getLogger} = require('../../util');

const logger = getLogger(__filename);

const getClassicURLs = (params, id) =>
  params.map(getClassicURL).map(fn => fn(id));

const fplLeagueRequest = options =>
  options.map(option =>
    rp
      .get(option)
      .then(response => response)
      .catch(err => {
        logger.error(err);
        return Error('Issue in Classic Standings.');
      })
  );

const fetchLeagueData = flow(getClassicURLs, getJSONOptions, fplLeagueRequest);

const fetchLeagueStandings = id => {
  const params = [[1, 1, 1], [1, 1, 2]];
  const results = fetchLeagueData(params, id);
  return Promise.all(results);
};

module.exports = {
  getClassicURLs,
  fetchLeagueStandings,
};

// npm packages
const rp = require('request-promise');
const {flow} = require('lodash');

// our packages
const {getH2HURL} = require('../fplUri');
const {getJSONOptions, getLogger} = require('../../util');

const logger = getLogger(__filename);
const getOptions = flow(getH2HURL, getJSONOptions);

const fetchStandings = id =>
  rp
    .get(getOptions(id))
    .then(response => response)
    .catch(err => logger.error(err));

module.exports = {fetchStandings};

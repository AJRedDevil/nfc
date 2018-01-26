// npm packages
const {assign} = require('lodash');

// our packages
const {getBaseConfig} = require('./fplURLGenerator');

const h2hConfig = {
  PATH: 'drf/leagues-h2h-standings',
};
const getH2HConfig = () => assign(getBaseConfig(), h2hConfig);

module.exports = {
  getH2HConfig,
};

// npm packages
const {assign} = require('lodash');
const {flow} = require('lodash');

// our packages
const {createURL, getBaseConfig} = require('./fplURLGenerator');

const h2hConfig = {
  PATH: 'drf/leagues-h2h-standings',
};
const getH2HConfig = () => assign(getBaseConfig(), h2hConfig);
const getH2HURL = flow(getH2HConfig, createURL);

module.exports = {
  getH2HConfig,
  getH2HURL: getH2HURL(),
};

const {createURL} = require('./fplURLGenerator');
const {getParams, getClassicConfig} = require('./classic');
const {getH2HConfig} = require('./h2h');

module.exports = {
  createURL,
  getParams,
  getClassicConfig,
  getH2HConfig,
};

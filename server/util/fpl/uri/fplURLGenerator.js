// npm packages
const {zip, isUndefined} = require('lodash');

const createBaseURL = (protocol, hostname) => `${protocol}://${hostname}`;
const createURLPath = (...args) => args.join('/');
const createFullPath = (url, keys, values) =>
  zip(keys, values)
    .map(keyValue => keyValue.join('='))
    .reduce((finalUrl, param) => `${finalUrl}&${param}`, `${url}?`);

const createURL = config => id => {
  const {PROTOCOL, HOSTNAME, PATH, KEYS, VALUES} = config;
  const BASE_URL = createBaseURL(PROTOCOL, HOSTNAME);
  const URL_PATH = createURLPath(BASE_URL, PATH, id);
  return isUndefined(KEYS) ? URL_PATH : createFullPath(URL_PATH, KEYS, VALUES);
};

const getBaseConfig = () => ({
  PROTOCOL: 'https',
  HOSTNAME: 'fantasy.premierleague.com',
});

module.exports = {getBaseConfig, createURL};

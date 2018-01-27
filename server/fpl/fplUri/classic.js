// npm packages
const {flow, zip} = require('lodash');

// our packages
const {createURL, getBaseConfig} = require('./fplURLGenerator');

const PHASE = Object.freeze({
  OVERALL: 1,
  AUGUST: 2,
  SEPTEMBER: 3,
  OCTOBER: 4,
  NOVEMBER: 5,
  DECEMBER: 6,
  JANUARY: 7,
  FEBRUARY: 8,
  MARCH: 9,
  APRIL: 10,
  MAY: 11,
});
const KEYS = ['phase', 'lePage', 'lsPage'];

const getParams = values => Object.freeze(zip(KEYS, values));

const createClassicConfig = ({phase = PHASE.OVERALL, lePage = 1, lsPage = 1}) =>
  Object.freeze({
    PATH: 'drf/leagues-classic-standings',
    KEYS: ['phase', 'le-page', 'ls-page'],
    VALUES: [phase, lePage, lsPage],
  });
const getClassicConfig = (values = getParams([1, 1, 1])) =>
  Object.assign(getBaseConfig(), createClassicConfig(values));

const getClassicURL = flow(getParams, getClassicConfig, createURL);

module.exports = {
  getClassicURL,
};

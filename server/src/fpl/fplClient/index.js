const {fetchH2HStandings} = require('./h2h');
const {fetchLeagueStandings} = require('./classic');
const {fetchGwOverallStandings} = require('./gwtable');

module.exports = {
  fetchH2HStandings,
  fetchLeagueStandings,
  fetchGwOverallStandings,
};

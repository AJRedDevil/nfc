import PropTypes from 'prop-types';

const head = PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string}));

const body = PropTypes.arrayOf(PropTypes.object);

const h2hLeagueSchema = PropTypes.shape({head: PropTypes.array});

const data = PropTypes.shape({
  lastFetched: PropTypes.string,
  allIds: PropTypes.arrayOf(PropTypes.string),
  leagueNames: PropTypes.object,
  standings: PropTypes.object,
});

export default {h2hLeagueSchema, data, head, body};

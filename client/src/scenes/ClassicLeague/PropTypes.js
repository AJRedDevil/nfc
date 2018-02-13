import PropTypes from 'prop-types';

const head = PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string}));

const body = PropTypes.arrayOf(PropTypes.object);

const classicLeagueSchema = PropTypes.shape({head});

const data = PropTypes.shape({
  leagueName: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  lastFetched: PropTypes.string.isRequired,
  standings: PropTypes.arrayOf(PropTypes.object),
});

export default {classicLeagueSchema, data, head, body};

import PropTypes from 'prop-types';

const head = PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string}));

const body = PropTypes.arrayOf(PropTypes.object);

const h2hLeagueSchema = PropTypes.shape(head);

const data = PropTypes.shape({
  lastFetched: PropTypes.string,
  leagueNames: PropTypes.arrayOf(PropTypes.string),
  standings: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
});

export default {h2hLeagueSchema, data, head, body};

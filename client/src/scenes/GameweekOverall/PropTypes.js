import PropTypes from 'prop-types';

const head = PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string}));

const body = PropTypes.arrayOf(PropTypes.array);

const gwOverallSchema = PropTypes.shape({head});

const data = PropTypes.shape({
  leagueName: PropTypes.string.isRequired,
  gameweek: PropTypes.number.isRequired,
  lastFetched: PropTypes.string.isRequired,
  standings: PropTypes.arrayOf(PropTypes.array),
});

const selectedOptions = PropTypes.arrayOf(PropTypes.object);

export default {gwOverallSchema, data, head, body, selectedOptions};

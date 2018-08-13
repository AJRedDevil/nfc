import PropTypes from 'prop-types';

const head = PropTypes.arrayOf(
  PropTypes.shape({text: PropTypes.string.isRequired})
);

const top5Schema = PropTypes.shape({
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  head,
});

const data = PropTypes.shape({
  leagueName: PropTypes.string,
  creationDate: PropTypes.string,
  lastFetched: PropTypes.string,
  standings: PropTypes.arrayOf(PropTypes.object),
});

const top5 = PropTypes.arrayOf(PropTypes.array);

export default {top5Schema, data, top5};

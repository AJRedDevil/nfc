import PropTypes from 'prop-types';

const data = PropTypes.shape({
  lastFetched: PropTypes.string,
  divisions: PropTypes.arrayOf(PropTypes.string),
  standings: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
});

const head = PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string}));

const winnersSchema = PropTypes.shape({
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  head,
});

const winners = PropTypes.arrayOf(PropTypes.array);

const h2hLeagueSchema = PropTypes.shape(head);

export default {data, h2hLeagueSchema, winners, winnersSchema};

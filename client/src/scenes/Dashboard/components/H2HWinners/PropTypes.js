import PropTypes from 'prop-types';

const data = PropTypes.shape({
  lastFetched: PropTypes.string,
  leagueNames: PropTypes.object,
  standings: PropTypes.object,
});

const head = PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string}));

const winnersSchema = PropTypes.shape({
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  head,
});

const winners = PropTypes.arrayOf(PropTypes.array);

const h2hLeagueSchema = PropTypes.shape(head);

export default {data, h2hLeagueSchema, winners, winnersSchema};

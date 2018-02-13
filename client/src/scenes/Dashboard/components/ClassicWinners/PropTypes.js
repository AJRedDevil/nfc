import {array, arrayOf, object, shape, string} from 'prop-types';

const head = arrayOf(shape({text: string}));

const schema = shape({
  title: string,
  subTitle: string,
  head,
});

const data = shape({
  leagueName: string,
  creationDate: string,
  lastFetched: string,
  standings: arrayOf(object),
});

const top3 = arrayOf(array);

export default {schema, data, top3};

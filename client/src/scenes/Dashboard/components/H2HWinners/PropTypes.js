import {array, arrayOf, shape, string} from 'prop-types';

const head = arrayOf(shape({text: string}));

const body = arrayOf(array);

const data = shape({
  head,
  body,
});

export default {data};

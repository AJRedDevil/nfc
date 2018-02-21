import {array, arrayOf, shape, string} from 'prop-types';

const tableHeader = {
  text: string.isRequired,
};
const tableHead = arrayOf(shape(tableHeader));
const tableFoot = arrayOf(shape(tableHeader));

const tableBody = arrayOf(array);

export default {
  tableHead,
  tableFoot,
  tableBody,
};

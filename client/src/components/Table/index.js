// npm packages
import React from 'react';

// our packages
import THead from './thead';
import TFoot from './tfoot';
import TBody from './tbody';
import TablePropTypes from './propTypes';

const Table = ({head, body, foot}) => (
  <table className="table is-fullwidth is-striped is-narrow is-hoverable">
    <THead data={head} />
    <TFoot data={foot} />
    <TBody data={body} />
  </table>
);
Table.propTypes = {
  head: TablePropTypes.tableHead,
  foot: TablePropTypes.tableFoot,
  body: TablePropTypes.tableBody,
};

export default Table;

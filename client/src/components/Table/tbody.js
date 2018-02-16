// npm packages
import React from 'react';
import {array, number, oneOfType, string} from 'prop-types';

// our packages
import TablePropTypes from './propTypes';

const TableHeader = ({data}) => <th>{data}</th>;
TableHeader.propTypes = {
  data: oneOfType([number, string]),
};

const TableData = ({data}) => <td>{data}</td>;
TableData.propTypes = {
  data: oneOfType([number, string]),
};

const TableRow = ({data}) => (
  <tr>
    {data.map(
      (rowData, index) =>
        index === 0 ? (
          // eslint-disable-next-line react/no-array-index-key
          <TableHeader key={`${index}-${rowData}`} data={rowData} />
        ) : (
          // eslint-disable-next-line react/no-array-index-key
          <TableData key={`${index}-${rowData}`} data={rowData} />
        )
    )}
  </tr>
);
TableRow.propTypes = {
  data: array,
};

const TBody = ({data}) => (
  <tbody>{data && data.map(item => <TableRow key={item} data={item} />)}</tbody>
);
TBody.propTypes = {
  data: TablePropTypes.tableBody,
};

export default TBody;

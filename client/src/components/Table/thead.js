// npm packages
import React from 'react';
import {isUndefined} from 'lodash';
import {string} from 'prop-types';

// our packages
import TablePropTypes from './propTypes';

const TableHeader = ({text}) => <th>{text}</th>;
TableHeader.propTypes = {
  text: string.isRequired,
};

const THead = ({data}) => (
  <thead>
    <tr>
      {data &&
        !isUndefined(data) &&
        data.map((props, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TableHeader key={`${index}`} {...props} />
        ))}
    </tr>
  </thead>
);
THead.propTypes = {
  data: TablePropTypes.tableHead,
};

export default THead;

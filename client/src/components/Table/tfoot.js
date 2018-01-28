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

const TFoot = ({data}) => (
  <tfoot>
    <tr>
      {data &&
        !isUndefined(data) &&
        data.map((props, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TableHeader key={`${index}`} {...props} />
        ))}
    </tr>
  </tfoot>
);
TFoot.propTypes = {
  data: TablePropTypes.tableFoot,
};

export default TFoot;

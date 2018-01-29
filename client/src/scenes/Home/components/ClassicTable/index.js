// npm packages
import React from 'react';
import {shape, string} from 'prop-types';

// our packages
import TableHeading from '../../../../components/TableHeading';
import Table from '../../../../components/Table';
import ClassicPropType from '../../../../components/Table/propTypes';

const ClassicTable = props => (
  <div>
    <TableHeading {...props} />
    <Table {...props.data} />
  </div>
);
ClassicTable.propTypes = {
  data: shape({
    head: ClassicPropType.tableHead,
    body: ClassicPropType.tableBody,
    foot: ClassicPropType.tableFoot,
  }),
};

export default ClassicTable;

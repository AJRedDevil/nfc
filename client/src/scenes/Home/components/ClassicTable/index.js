// npm packages
import React, {Component} from 'react';

// our packages
import TableHeading from '../../../../components/TableHeading';
import Table from '../../../../components/Table';
import {classicLeagueAPI} from '../../../../services/api';

class ClassicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'NFC Classic',
      subtitle: 'Top 3',
      data: {},
    };
  }

  componentDidMount() {
    classicLeagueAPI
      .getTop3()
      .then(data => this.setState({data}))
      .catch(error => console.error(error));
  }

  render() {
    return (
      this.state.data && (
        <div>
          <TableHeading {...this.state} />
          <Table {...this.state.data} />
        </div>
      )
    );
  }
}

export default ClassicTable;

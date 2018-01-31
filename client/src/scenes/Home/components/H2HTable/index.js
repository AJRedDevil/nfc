// npm packages
import React, {Component} from 'react';

// our packages
import TableHeading from '../../../../components/TableHeading';
import Table from '../../../../components/Table';
import {h2hLeagueAPI} from '../../../../services/api';

class ClassicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'NFC H2H',
      subtitle: 'Winners',
      data: {},
    };
  }

  componentDidMount() {
    h2hLeagueAPI
      .getWinners()
      .then(body =>
        this.setState({
          data: {
            body,
            head: h2hLeagueAPI.getHeadings(),
          },
        })
      )
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

// npm packages
import React, {Component} from 'react';

// our packages
import ClassicTable from './components/ClassicTable';
import classicLeagueAPI from '../../services/api';

class Home extends Component {
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
    return <ClassicTable {...this.state} />;
  }
}

export default Home;

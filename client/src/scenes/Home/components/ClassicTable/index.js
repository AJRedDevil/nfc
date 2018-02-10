// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {func} from 'prop-types';
import {size} from 'lodash';

// our packages
import LoadingTable from '../../../../components/LoadingTable';
import TableHeading from '../../../../components/TableHeading';
import Table from '../../../../components/Table';
import {fetchClassicData} from '../../../../services/classic/actions';
import ClassicStandingsPropTypes from './PropTypes';

class ClassicStandings extends Component {
  componentDidMount() {
    this.props.fetchClassicData();
  }

  renderClassicStandings = props => (
    <div>
      <TableHeading {...props} />
      <Table {...props.data} />
    </div>
  );

  render() {
    const {classicStandingsData} = this.props;
    return size(classicStandingsData.data) > 0 ? (
      this.renderClassicStandings(classicStandingsData)
    ) : (
      <LoadingTable title="ClassicStandings" />
    );
  }
}
ClassicStandings.propTypes = {
  fetchClassicData: func.isRequired,
  classicStandingsData: ClassicStandingsPropTypes.data,
};

const mapStateToProps = state => ({
  classicStandingsData: state.ClassicStandings,
});

const mapDispatchToProps = dispatch => ({
  fetchClassicData: () => dispatch(fetchClassicData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassicStandings);

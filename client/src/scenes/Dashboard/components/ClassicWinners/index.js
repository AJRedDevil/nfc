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
import Animation from '../../../../components/animations';

class ClassicWinners extends Component {
  componentDidMount() {
    this.props.fetchClassicData();
  }

  renderClassicWinners = props => (
    <Animation.Fade in>
      <div>
        <TableHeading {...props.schema} />
        <Table body={props.top3} {...props.schema} />
      </div>
    </Animation.Fade>
  );

  render() {
    const {classicStandingsData} = this.props;
    return size(classicStandingsData.data) > 0 ? (
      this.renderClassicWinners(classicStandingsData)
    ) : (
      <LoadingTable title="ClassicWinners" />
    );
  }
}
ClassicWinners.propTypes = {
  fetchClassicData: func.isRequired,
  classicStandingsData: ClassicStandingsPropTypes.data,
};

const mapStateToProps = state => ({
  classicStandingsData: state.ClassicStandings,
});

const mapDispatchToProps = dispatch => ({
  fetchClassicData: () => dispatch(fetchClassicData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassicWinners);

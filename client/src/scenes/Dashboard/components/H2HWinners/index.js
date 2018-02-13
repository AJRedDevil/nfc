// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {func} from 'prop-types';
import {size} from 'lodash';

// our packages
import LoadingTable from '../../../../components/LoadingTable';
import TableHeading from '../../../../components/TableHeading';
import Table from '../../../../components/Table';
import {fetchH2HStandingsData} from '../../../../services/h2h/actions';
import H2HStandingsPropTypes from './PropTypes';
import Animation from '../../../../components/animations';

class H2HWinners extends Component {
  componentDidMount() {
    this.props.fetchH2HStandingsData();
  }

  renderH2HWinners = props => (
    <Animation.Fade in>
      <div>
        <TableHeading {...props.schema} />
        <Table body={props.winners} {...props.schema} />
      </div>
    </Animation.Fade>
  );

  render() {
    const {h2hStandingsData} = this.props;
    return size(h2hStandingsData.data) > 0 ? (
      this.renderH2HWinners(h2hStandingsData)
    ) : (
      <LoadingTable title="H2HWinners" />
    );
  }
}
H2HWinners.propTypes = {
  fetchH2HStandingsData: func.isRequired,
  h2hStandingsData: H2HStandingsPropTypes.data,
};

const mapStateToProps = state => ({
  h2hStandingsData: state.H2HStandings,
});

const mapDispatchToProps = dispatch => ({
  fetchH2HStandingsData: () => dispatch(fetchH2HStandingsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(H2HWinners);

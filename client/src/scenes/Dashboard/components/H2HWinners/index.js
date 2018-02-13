// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {size} from 'lodash';

// our packages
import LoadingTable from '../../../../components/LoadingTable';
import TableHeading from '../../../../components/TableHeading';
import Table from '../../../../components/Table';
import {fetchH2HStandingsData} from '../../../../services/h2h/actions';
import H2HWinnersPropTypes from './PropTypes';
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
    const {winners, schema} = this.props;
    return size(winners) > 0 ? (
      this.renderH2HWinners({schema, winners})
    ) : (
      <LoadingTable title="H2HWinners" />
    );
  }
}
H2HWinners.propTypes = {
  fetchH2HStandingsData: PropTypes.func.isRequired,
  winners: H2HWinnersPropTypes.winners,
  schema: H2HWinnersPropTypes.winnersSchema,
};

const mapStateToProps = state => ({
  data: state.H2HStandings.data,
  schema: state.H2HStandings.winnersSchema,
  winners: state.H2HStandings.winners,
});

const mapDispatchToProps = dispatch => ({
  fetchH2HStandingsData: () => dispatch(fetchH2HStandingsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(H2HWinners);

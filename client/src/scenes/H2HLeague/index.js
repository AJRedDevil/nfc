// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';
import {connect} from 'react-redux';

// our packages
import H2HTitle from './H2HTitle';
import H2HLeaguePropTypes from './PropTypes';
import LoadingTable from '../../components/LoadingTable';
import DateHelper from '../../utils';
import {fetchH2HStandingsData} from '../../services/h2h/actions';

class H2HLeague extends Component {
  componentDidMount() {
    const {lastFetched, standings} = this.props.data;
    if (isEmpty(standings) || DateHelper.isAnHourAgo(lastFetched)) {
      this.props.fetchH2HData();
    }
  }

  renderH2HStandings = () => (
    <div>
      <H2HTitle leagueNames={this.props.data.leagueNames} />
    </div>
  );

  render() {
    return isEmpty(this.props.data.standings) ? (
      <LoadingTable title="H2HStandings" />
    ) : (
      this.renderH2HStandings()
    );
  }
}
H2HLeague.propTypes = {
  // schema: H2HLeaguePropTypes.h2hLeagueSchema,
  data: H2HLeaguePropTypes.data,
  fetchH2HData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.H2HStandings.data,
  schema: state.H2HStandings.h2hLeagueSchema,
});

const mapDispatchToProps = dispatch => ({
  fetchH2HData: () => dispatch(fetchH2HStandingsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(H2HLeague);

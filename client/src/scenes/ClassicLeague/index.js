// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

// our packages
import LeagueTitle from './LeagueTitle';
import LeagueStandngs from './LeagueStandings';
import LoadingTable from '../../components/LoadingTable';
import DateHelper from '../../utils';
import ClassicLeaguePropTypes from './PropTypes';
import {fetchClassicData} from '../../services/classic/actions';

class ClassicLeague extends Component {
  componentDidMount() {
    const {lastFetched, standings} = this.props.data;
    if (isEmpty(standings) || DateHelper.isAnHourAgo(lastFetched)) {
      this.props.fetchClassicData();
    }
  }

  renderClassicStandings = () => (
    <div>
      <LeagueTitle {...this.props.data} />
      <LeagueStandngs {...this.props.data} {...this.props.schema} />
    </div>
  );

  render() {
    return isEmpty(this.props.data.standings) ? (
      <LoadingTable title="ClassicStandings" />
    ) : (
      this.renderClassicStandings()
    );
  }
}
ClassicLeague.propTypes = {
  schema: ClassicLeaguePropTypes.classicLeagueSchema,
  data: ClassicLeaguePropTypes.data,
  fetchClassicData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.ClassicStandings.data,
  schema: state.ClassicStandings.classicLeagueSchema,
});

const mapDispatchToProps = dispatch => ({
  fetchClassicData: () => dispatch(fetchClassicData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassicLeague);

// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEqual, isEmpty} from 'lodash';
import {connect} from 'react-redux';

// our packages
import H2HTitle from './H2HTitle';
import H2HStandings from './H2HStandings';
import H2HLeaguePropTypes from './PropTypes';
import LoadingTable from '../../components/LoadingTable';
import DateHelper from '../../utils';
import {fetchH2HStandingsData} from '../../services/h2h/actions';

const makePath = text =>
  text
    .split(' ')
    .join('')
    .toLowerCase();

const getLinks = leagueNames =>
  leagueNames.map(leagueName => ({
    path: makePath(leagueName),
    text: leagueName,
  }));

class H2HLeague extends Component {
  constructor(props) {
    super(props);
    const {leagueNames} = this.props.data;
    this.state = {links: isEmpty(leagueNames) ? [] : getLinks(leagueNames)};
  }

  componentDidMount() {
    const {lastFetched, standings} = this.props.data;
    if (isEmpty(standings) || DateHelper.isAnHourAgo(lastFetched)) {
      this.props.fetchH2HData();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.data.leagueNames, nextProps.data.leagueNames)) {
      this.setState({
        links: getLinks(nextProps.data.leagueNames),
      });
    }
  }

  renderH2HStandings = () => (
    <div>
      <H2HTitle links={this.state.links} />
      <H2HStandings {...this.props.data} {...this.props.schema} />
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
  schema: H2HLeaguePropTypes.h2hLeagueSchema,
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

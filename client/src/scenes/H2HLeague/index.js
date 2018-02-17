// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEqual, isEmpty} from 'lodash';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

// our packages
import H2HTitle from './H2HTitle';
import H2HStandings from './H2HStandings';
import H2HLeaguePropTypes from './PropTypes';
import LoadingTable from '../../components/LoadingTable';
import {DateHelper} from '../../utils';
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
    const links = getLinks(this.props.data.leagueNames);
    this.state = {links};
    if (links.length) {
      const defaultUrl = `${this.props.match.url}/${links[0].path}`;
      this.props.history.push(defaultUrl);
    }
  }

  componentDidMount() {
    const {lastFetched, standings} = this.props.data;
    if (isEmpty(standings) || DateHelper.isAnHourAgo(lastFetched)) {
      this.props.fetchH2HData();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.data.leagueNames, nextProps.data.leagueNames)) {
      const links = getLinks(nextProps.data.leagueNames);
      this.setState({links});
      if (links.length) {
        const defaultUrl = `${this.props.match.url}/${links[0].path}`;
        this.props.history.push(defaultUrl);
      }
    }
  }

  renderStandings = () => {
    const routes = this.state.links.map((link, index) => (
      <Route
        key={link}
        path={`${this.props.match.url}/${link.path}`}
        render={() => (
          <H2HStandings
            standings={this.props.data.standings[index]}
            {...this.props.schema}
          />
        )}
      />
    ));
    return routes;
  };

  renderH2HStandings = () => (
    <div>
      <H2HTitle links={this.state.links} />
      <Switch>{this.renderStandings()}</Switch>
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
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  data: state.H2HStandings.data,
  schema: state.H2HStandings.h2hLeagueSchema,
});

const mapDispatchToProps = dispatch => ({
  fetchH2HData: () => dispatch(fetchH2HStandingsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(H2HLeague);

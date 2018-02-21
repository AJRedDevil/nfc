// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

// our packages
import H2HTitle from './H2HTitle';
import H2HStandings from './H2HStandings';
import H2HLeaguePropTypes from './PropTypes';
import LoadingTable from '../../components/LoadingTable';
import {DateHelper} from '../../utils';
import {fetchH2HStandingsData, setRoute} from '../../services/h2h/actions';

class H2HLeague extends Component {
  componentWillMount() {
    if (this.props.currentTab) {
      const defaultUrl = `${this.props.match.url}/${this.props.currentTab}`;
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
    if (
      isEmpty(this.props.currentTab) &&
      this.props.currentTab !== nextProps.currentTab
    ) {
      const defaultUrl = `${this.props.match.url}/${nextProps.currentTab}`;
      this.props.history.push(defaultUrl);
    }
  }

  renderStandings = () => {
    const {links, match, data, schema, currentTab} = this.props;
    const routes = links.map(link => (
      <Route
        key={link}
        path={`${match.url}/${link.path}`}
        render={() => (
          <H2HStandings standings={data.standings[currentTab]} {...schema} />
        )}
      />
    ));
    return routes;
  };

  renderH2HStandings = () => (
    <div>
      <H2HTitle {...this.props} />
      <Switch>{this.renderStandings()}</Switch>
    </div>
  );

  render() {
    return isEmpty(this.props.currentTab) ? (
      <LoadingTable title="H2HStandings" />
    ) : (
      this.renderH2HStandings()
    );
  }
}
H2HLeague.propTypes = {
  currentTab: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ),
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
  setNextTab: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentTab: state.H2HStandings.currentTab,
  links: state.H2HStandings.links,
  data: state.H2HStandings.data,
  schema: state.H2HStandings.h2hLeagueSchema,
});

const mapDispatchToProps = dispatch => ({
  fetchH2HData: () => dispatch(fetchH2HStandingsData()),
  setNextTab: nextTab => dispatch(setRoute(nextTab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(H2HLeague);

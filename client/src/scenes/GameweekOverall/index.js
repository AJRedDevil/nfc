// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

// our packages
import GwOverallTitle from './GwOverallTitle';
import LeagueStandngs from './LeagueStandings';
import LoadingTable from '../../components/LoadingTable';
import {DateHelper} from '../../utils';
import GameweekOverallPropTypes from './PropTypes';
import {
  fetchGwOverallData,
  selectOptions,
} from '../../services/gwoverall/actions';

const getFilterValue = selectedOptions => selectedOptions.map(i => i.value);

const filterData = (standings, selectedOptions) =>
  selectedOptions.length > 0
    ? standings.filter(player => selectedOptions.includes(player[2]))
    : standings;

class GameweekOverall extends Component {
  componentDidMount() {
    const {lastFetched, standings} = this.props.data;
    if (isEmpty(standings) || DateHelper.isAnHourAgo(lastFetched)) {
      this.props.fetchGwOverallData();
    }
  }

  handleChange = selectedOptions => this.props.selectOptions(selectedOptions);

  renderStandings = () => (
    <div>
      <GwOverallTitle
        {...this.props.data}
        {...this.state}
        handleChange={this.handleChange}
      />
      <LeagueStandngs
        standings={filterData(
          this.props.data.standings,
          getFilterValue(this.props.selectedOptions)
        )}
        {...this.props.schema}
      />
    </div>
  );

  render() {
    return isEmpty(this.props.data.standings) ? (
      <LoadingTable title="GWOverallStandings" />
    ) : (
      this.renderStandings()
    );
  }
}
GameweekOverall.propTypes = {
  schema: GameweekOverallPropTypes.gwOverallSchema,
  data: GameweekOverallPropTypes.data,
  selectedOptions: GameweekOverallPropTypes.selectedOptions,
  fetchGwOverallData: PropTypes.func.isRequired,
  selectOptions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.GwOverallStandings.data,
  schema: state.GwOverallStandings.gwOverallSchema,
  selectedOptions: state.GwOverallStandings.selectedOptions,
});

const mapDispatchToProps = dispatch => ({
  fetchGwOverallData: () => dispatch(fetchGwOverallData()),
  selectOptions: data => dispatch(selectOptions(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameweekOverall);

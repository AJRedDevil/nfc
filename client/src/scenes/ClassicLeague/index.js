// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {arrayOf, func, object, shape, string} from 'prop-types';
import {isEmpty} from 'lodash';

// our packages
import {fetchClassicData} from '../../services/classic/actions';
import LoadingTable from '../../components/LoadingTable';
import DateHelper from '../../utils';

class ClassicLeague extends Component {
  componentDidMount() {
    const {lastFetched, standings} = this.props.data;
    if (isEmpty(standings) || DateHelper.isAnHourAgo(lastFetched)) {
      this.props.fetchClassicData();
    }
  }

  renderTitleSubtitle = () => (
    <div>
      <h1 className="title">{this.props.data.leagueName}</h1>
      <h2 className="subtitle">
        Created : {DateHelper.ISOToDateString(this.props.data.creationDate)}
      </h2>
    </div>
  );

  renderClassicStandings = () => this.renderTitleSubtitle();

  render() {
    return isEmpty(this.props.data.standings) ? (
      <LoadingTable title="ClassicStandings" />
    ) : (
      this.renderClassicStandings()
    );
  }
}
ClassicLeague.propTypes = {
  data: shape({
    leagueName: string,
    creationDate: string,
    lastFetched: string,
    standings: arrayOf(object),
  }),
  fetchClassicData: func.isRequired,
};

const mapStateToProps = state => ({
  data: state.ClassicStandings.data,
});

const mapDispatchToProps = dispatch => ({
  fetchClassicData: () => dispatch(fetchClassicData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassicLeague);

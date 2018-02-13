// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {isEmpty, size} from 'lodash';

// our packages
import LoadingTable from '../../../../components/LoadingTable';
import TableHeading from '../../../../components/TableHeading';
import Table from '../../../../components/Table';
import ClassicStandingsPropTypes from './PropTypes';
import Animation from '../../../../components/animations';
import DateHelper from '../../../../utils';
import {fetchClassicData} from '../../../../services/classic/actions';

class ClassicWinners extends Component {
  componentDidMount() {
    const {lastFetched, standings} = this.props.data;
    if (isEmpty(standings) || DateHelper.isAnHourAgo(lastFetched)) {
      this.props.fetchClassicData();
    }
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
    const {schema, top3} = this.props;
    return size(top3) > 0 ? (
      this.renderClassicWinners({schema, top3})
    ) : (
      <LoadingTable title="ClassicWinners" />
    );
  }
}
ClassicWinners.propTypes = {
  data: ClassicStandingsPropTypes.data,
  fetchClassicData: PropTypes.func.isRequired,
  schema: ClassicStandingsPropTypes.top3Schema,
  top3: ClassicStandingsPropTypes.top3,
};

const mapStateToProps = state => ({
  data: state.ClassicStandings.data,
  schema: state.ClassicStandings.top3Schema,
  top3: state.ClassicStandings.top3,
});

const mapDispatchToProps = dispatch => ({
  fetchClassicData: () => dispatch(fetchClassicData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassicWinners);

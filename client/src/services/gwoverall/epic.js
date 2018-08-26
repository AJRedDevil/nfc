// npm packages
import {Observable} from 'rxjs';

// our packages
import {gwOverallDataFetched} from './actions';
import {FETCH_DATA, FETCH_DATA_REJECTED} from './actionTypes';
import {gwOverallAPI} from '../api';

const fetchGwOverallStandingsEpic = action$ =>
  action$
    .ofType(FETCH_DATA)
    .mergeMap(() => gwOverallAPI.getGwOverallStandings())
    .flatMap(response =>
      Observable.concat(Observable.of(gwOverallDataFetched(response)))
    )
    .catch(error =>
      Observable.of({
        type: FETCH_DATA_REJECTED,
        payload: error,
        error: true,
      })
    );

export default {fetchGwOverallStandingsEpic};

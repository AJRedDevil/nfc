// npm packages
import {Observable} from 'rxjs';

// our packages
import {classicDataFetched, extractClassicWinners} from './actions';
import {FETCH_DATA, FETCH_DATA_REJECTED} from './actionTypes';
import {classicLeagueAPI} from '../api';

const fetchClassicStandingsEpic = action$ =>
  action$
    .ofType(FETCH_DATA)
    .mergeMap(() => classicLeagueAPI.getClassicStandings())
    .flatMap(response =>
      Observable.concat(
        Observable.of(classicDataFetched(response)),
        Observable.of(extractClassicWinners(response))
      )
    )
    .catch(error =>
      Observable.of({
        type: FETCH_DATA_REJECTED,
        payload: error.xhr.response,
        error: true,
      })
    );

export default {fetchClassicStandingsEpic};

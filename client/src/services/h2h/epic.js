// npm packages
import {Observable} from 'rxjs';

// our packages
import {h2hStandingsDataFetched} from './actions';
import {FETCH_DATA, FETCH_DATA_REJECTED} from './actionTypes';
import {h2hLeagueAPI} from '../api';

const fetchH2HStandingsEpic = action$ =>
  action$
    .ofType(FETCH_DATA)
    .mergeMap(() => h2hLeagueAPI.getWinners())
    .map(response =>
      h2hStandingsDataFetched({
        body: response,
        head: h2hLeagueAPI.getHeadings(),
      })
    )
    .catch(error =>
      Observable.of({
        type: FETCH_DATA_REJECTED,
        payload: error.xhr.response,
        error: true,
      })
    );

export default {fetchH2HStandingsEpic};

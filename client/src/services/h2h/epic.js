// npm packages
import {Observable} from 'rxjs';

// our packages
import {
  h2hStandingsDataFetched,
  extractH2HWinners,
  setLinks,
  setDefaultRoute,
} from './actions';
import {FETCH_DATA, FETCH_DATA_REJECTED} from './actionTypes';
import {h2hLeagueAPI} from '../api';

const fetchH2HStandingsEpic = action$ =>
  action$
    .ofType(FETCH_DATA)
    .mergeMap(() => h2hLeagueAPI.getH2HStandings())
    .flatMap(response =>
      Observable.concat(
        Observable.of(h2hStandingsDataFetched(response)),
        Observable.of(extractH2HWinners(response)),
        Observable.of(setLinks()),
        Observable.of(setDefaultRoute())
      )
    )
    .catch(error =>
      Observable.of({
        type: FETCH_DATA_REJECTED,
        payload: error.xhr.response,
        error: true,
      })
    );

export default {fetchH2HStandingsEpic};

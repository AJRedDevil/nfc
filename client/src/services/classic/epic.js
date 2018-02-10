// our packages
import {classicDataFetched} from './actions';
import {FETCH_DATA} from './actionTypes';
import {classicLeagueAPI} from '../api';

const fetchClassicStandingsEpic = action$ =>
  action$
    .ofType(FETCH_DATA)
    .mergeMap(() => classicLeagueAPI.getTop3())
    .map(response => classicDataFetched(response));

export default {fetchClassicStandingsEpic};

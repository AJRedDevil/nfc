// npm packages
import {combineEpics} from 'redux-observable';

// our packages
import Classic from '../classic/epic';
import H2H from '../h2h/epic';
import GwOverall from '../gwoverall/epic';

const rootEpic = combineEpics(
  Classic.fetchClassicStandingsEpic,
  H2H.fetchH2HStandingsEpic,
  GwOverall.fetchGwOverallStandingsEpic
);

export default rootEpic;

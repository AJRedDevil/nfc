// npm packages
import {combineEpics} from 'redux-observable';

// our packages
import Classic from '../classic/epic';
import H2H from '../h2h/epic';

const rootEpic = combineEpics(
  Classic.fetchClassicStandingsEpic,
  H2H.fetchH2HStandingsEpic
);

export default rootEpic;

// npm packages
import {combineEpics} from 'redux-observable';

// our packages
import Classic from '../classic/epic';

const rootEpic = combineEpics(Classic.fetchClassicStandingsEpic);

export default rootEpic;

// npm packages
import {combineReducers} from 'redux';

// our packages
import ClassicStandings from '../classic/reducer';
import H2HStandings from '../h2h/reducer';

const rootReducer = combineReducers({
  ClassicStandings,
  H2HStandings,
});

export default rootReducer;

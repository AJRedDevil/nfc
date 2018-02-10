// npm packages
import {combineReducers} from 'redux';

// our packages
import ClassicStandings from '../classic/reducer';

const rootReducer = combineReducers({
  ClassicStandings,
});

export default rootReducer;

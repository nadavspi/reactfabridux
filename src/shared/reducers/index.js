import { combineReducers } from 'redux';
import canvas from 'reducers/canvas';
import options from 'reducers/options';

const rootReducer = combineReducers({
  canvas,
  options
});

export default rootReducer;

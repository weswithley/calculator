import { combineReducers } from 'redux';
import calcReducer from './calcReducer';
// import numberReducer from './numberReducer';

// don't like use official 'combineReducers' due to I prefer flatten combined reducer.
// export default combineReducers({ calcReducer, numberReducer })

export default calcReducer;

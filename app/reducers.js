import { combineReducers } from 'redux';

import channelReducer from './reducers/channelReducer';
import patternReducer from './reducers/patternReducer';
import songReducer from './reducers/songReducer';
import viewReducer from './reducers/viewReducer';

const trackerApp = combineReducers({
  channels: channelReducer,
  patterns: patternReducer,
  song: songReducer,
  views: viewReducer
});



export default trackerApp;

// export default (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state
//   }
// }

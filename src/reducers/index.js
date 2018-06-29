import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

// export default combineReducers({
//   banana: () => []
// });
export default combineReducers({
  auth: AuthReducer
});

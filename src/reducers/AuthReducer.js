import { EMAIL_CHANGED } from '../actions/types';

//this is supposed to be the value of the Input
//what the user is actually typing
const INITIAL_STATE = { email: '' };

//CONVENTION IS REDUX COMMUNITY
// IS TO MAKE VARIABLES THAT HOLD ACTION TYPES.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log('action!');
    default:
      return state;
  }
};

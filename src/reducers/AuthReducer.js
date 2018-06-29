import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
 } from '../actions/types';

//this is supposed to be the value of the Input
//what the user is actually typing
const INITIAL_STATE = { email: '', password: '' };
//we don't have to default above, technically,
// but its lets other engineers knowwhat the reducer is responsible for

//CONVENTION IS REDUX COMMUNITY
// IS TO MAKE VARIABLES THAT HOLD ACTION TYPES.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log('action!');
      //user-entered text will come in through ACTION here

      // what we CANNOT do:
      // state.email = action.payload
      // return state;

      //###########################
      // Below Code (return statement) EXPLANATION:
      // make a NEW OBJECT, take all properties of existing state object
      // throw them into new object
      // then define property email (give it a value of action.payload)
      // toss it on top of whatever properties were on that state object
      // if state object already has email property, it will be overridden

      // PRODUCING/RETURNING BRAND NEW OBJECT
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

//whenever we dispatch an action
// we take our slice of state that the reducer last produced
// along w/ the action
// then OUT: New Slice of State

//After our reducer runs
//redux compares"
// newState === oldState?

//YES: Nothing Happened
// NO: Something Changed, update!

//Singular POINT:

// const state = {}
// const newState = state
// newState.color = 'red'
// newState === state ... what do we expect to get back?

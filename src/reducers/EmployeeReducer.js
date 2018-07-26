import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      //action coming across, it will have the 'payload'
      // from ""snapshot.val()"" --> EmployeeActions.js
      console.log(action);
      //BIG Line of Code right here! (x2)
      // return {...state [id]: action.payload };
      // console.log({...state [id]: action.payload };);
      // return state
      return action.payload
    default:
      return state;
  }
}

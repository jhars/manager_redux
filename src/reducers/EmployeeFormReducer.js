import {
  EMPLOYEE_UPDATE
} from '../actions/types';

//optional, but good practice to define below
const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'Jane' }
      // *** NEW SYNTAX ***
      //square braces NOT an Array --> it is called Key interpolation (key is determined at runtime)
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};

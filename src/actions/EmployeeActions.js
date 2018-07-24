import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { //Action Type(s):
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
 } from './types';


export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // console.log(name, phone, shift);
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop({ type: 'reset' });
      });
  };
};

// const employeePathById = ({ id }) => {
//   return `/users/${currentUser.uid}/employees`
// }

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      //this exists for the LIFECYCLE of our entrire Application
      //anytime any data is added tp that 'EMPLPOYEES' thing (dispatch({thingy}))
      //this "Catches" any actions on this (location)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
        //"Snapshot" is object that describes the that is in OUr PATH (current user "employees",
        //) Employees 'belong' to currentUser
        //kind of like 'META'-level Data
      });
  };
};

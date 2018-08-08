import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { //Action Type(s):
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
 } from './types';


export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
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

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  //WATCHER -- on the value (of this location on this list of employees right here)..
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      //this exists for the LIFECYCLE of our entrire Application
      //anytime any data is added tp that 'EMPLPOYEES' thing (dispatch({thingy}))
      //this "Catches" any actions on this (location)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
        //"Snapshot" is object that describes the that is in OUr PATH (current user "employees",
        //) Employees 'belong' to currentUser
        //kind of like 'META'-level Data
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

//Dispatch HERE (below)
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        // Actions.employeeList({ type: 'reset' });
        Actions.pop({ type: 'reset' });

        //FORM REDUCER HOLDS ALLL OF OUR STATE (for yrin's out loud)
        // -- clear out unsaved attributes, reste props on form reducer
      });
  };
};

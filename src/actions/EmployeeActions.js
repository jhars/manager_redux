import firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';
import { //Action Type(s):
  EMPLOYEE_UPDATE
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

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
};

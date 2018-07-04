import firebase from 'firebase';
import { //Action Type(s):
  EMAIL_CHANGED,
  PASSWORD_CHANGED
 } from './types';

export const emailChanged = (text) => { // ACTION CREATOR
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        //manually dispatch Action
        // not alling dispatch until
        // after the request is complete
        // then reate our actuon and manually pass it off to dispatch
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
      });
  };
};

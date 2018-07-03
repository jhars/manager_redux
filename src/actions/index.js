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
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => console.log(user));
};

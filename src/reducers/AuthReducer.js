import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
 } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  // console.log('action!');
  // console.log(action);
  // console.log('-------------');

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', loading: false };

    default:
      return state;
  }
};

export const loginUser = ({ email, password }) => {
  firebase.auth.signInWithEmailAndPassword(email, password)
  .then(user => console.log(user));
};

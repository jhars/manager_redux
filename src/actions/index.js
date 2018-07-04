import firebase from 'firebase';
import { //Action Type(s):
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
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
      //################################################################//
      // .then(user => {
      //   dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      //   //manually dispatch Action
      //   // not alling dispatch until
      //   // after the request is complete
      //   // then reate our actuon and manually pass it off to dispatch
      //
      //   // "ROBUST" WAY OF DOING SHIT... (via Dispatching of Actions from Singel Action Creator)
      // }) //funky shit (CODE) below... "(()" -on catch
      // .catch(() => {
      //   firebase.auth().createUserWithEmailAndPassword(email, password)
      //     .then(user => {
      //       dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      //     });
      // });
      //################################################################//

      //REDUX THUNK allows us to Expand the range of values we can return from an Action-Creator
      // Control ^& Power over what is going on in our Application
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
        });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

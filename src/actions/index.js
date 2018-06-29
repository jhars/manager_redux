//Action Type(s):
import { EMAIL_CHANGED } from './types';

// ACTION CREATOR
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

//no need to use 'default' keyword b/c we are exporting
//multiple types from this file
// this does, however, force us to import by using
// { EMAIL_CHANGED } as oppose to no curly-braces

export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';

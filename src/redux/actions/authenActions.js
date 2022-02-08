export const TYPES = {
  LOGIN_REQUEST: 'ACCOUNT_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'ACCOUNT_LOGIN_SUCCESS',
  LOGIN_FAIlTED: 'ACCOUNT_LOGIN_SUCCESS',

  LOGOUT_REQUEST: 'ACCOUNT_LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'ACCOUNT_LOGOUT_SUCCESS',

  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIDTED: 'REGISTER_SUCCESS',

  LOADING: 'LOADING',
  LOADED: 'LOADED',
};

export function loginSuccess (response) {
  return{
    type: TYPES.LOGIN_SUCCESS, response: response
  }
};

export function signupSuccess (response) {
  return{
    type: TYPES.REGISTER_SUCCESS, response: response
  }
};

export const logoutSuccess = (params) =>{
  type: TYPES.LOGOUT_SUCCESS
};

export function login (params) {
  return{
    type: TYPES.LOGIN_REQUEST,
    payload: params
  }
}

export function signup (params) {
  return{
    type: TYPES.REGISTER_REQUEST,
    payload: params
  }
}
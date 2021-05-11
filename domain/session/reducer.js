import { LOGIN, LOGIN_ERROR } from './action_types';
const INITIAL_STATE = {
  loggedIn: false,
  userInfo: undefined
};
 
export const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
        return {
            ...state,
            loggedIn: true,
            userInfo: action.payload
        }
    case LOGIN_ERROR:
        return {
            ...state,
            loggedIn: false,
            userInfo: {},
            error: action.payload
        }
    default:
      return state
  }
};
 

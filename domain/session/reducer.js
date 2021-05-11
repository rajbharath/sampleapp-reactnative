import { LOGIN } from './action_types';
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
            userInfo: {username: 'Murugan'}
        }
    default:
      return state
  }
};
 

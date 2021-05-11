import { LOGIN } from './action_types';
export const login = (credentials) => {
    console.log("Action Login");
    return {
        type: LOGIN,
        payload: credentials,
    };
};
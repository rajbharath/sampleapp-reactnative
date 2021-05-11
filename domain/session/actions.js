import { LOGIN } from './action_types';
export const login = (credentials) => (
    {
        type: LOGIN,
        payload: credentials,
    }
);
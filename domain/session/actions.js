import { LOGIN, LOGIN_ERROR, LOGIN_IN_PROGRESS, LOGOUT } from './action_types';
import { loginApi } from './api';
export const login = (credentials) => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN_IN_PROGRESS,
        });
        // simulating api call. call the api here and use that response
        const response = await loginApi(credentials);
        setTimeout(() => {
            if (!response.error) {
                dispatch({
                    type: LOGIN,
                    payload: response,
                })
                return;
            } else {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: response,
                })
                return;
            }
        }, 2000)
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    };
}
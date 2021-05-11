import { LOGIN, LOGIN_ERROR, LOGIN_IN_PROGRESS, LOGOUT } from './actionTypes';
import { loginApi } from './api';
export const login = (credentials) => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN_IN_PROGRESS,
        });
        // simulating api call. call the api here and use that response
        const response = await loginApi(credentials);
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
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    };
}
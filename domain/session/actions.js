import { LOGIN, LOGIN_ERROR } from './action_types';
import { loginApi } from './api';
export const login = (credentials) => {
    return async (dispatch) => {
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
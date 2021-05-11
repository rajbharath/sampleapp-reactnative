import axios from 'axios';
import { LOGIN_URL } from './urls';
import {
    StatusCodes,
} from 'http-status-codes';

export const loginApi = async (credentials) => {
    try {
        const response = await axios.post(LOGIN_URL, {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        });
        console.log(response)
    
        if (response.status = StatusCodes.OK) {
            return {
                username: 'Murugan',
                token: response.data.token
            };
        } else {
            return {
                error: response.error
            }
        }
    } catch(err) {
        console.log(err)
        return {
            error: err
        }
    }
}
import { combineReducers } from 'redux';
import { sessionReducer } from './domain/session/reducer';


export default combineReducers({
    session: sessionReducer
});
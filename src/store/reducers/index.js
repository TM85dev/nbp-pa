import authReducer from './auth';
import usersReducer from './users';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    auth: authReducer,
    users: usersReducer,
})

export default allReducers;
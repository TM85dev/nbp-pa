import authReducer from './auth';
import usersReducer from './users';
import currencyReducer from './currency';
import userCurrencyReducer from './userCurrency';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    auth: authReducer,
    users: usersReducer,
    currency: currencyReducer,
    userCurrency: userCurrencyReducer
})

export default allReducers;
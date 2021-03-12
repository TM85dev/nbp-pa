export const login = (id) => ({
    type: 'LOGIN',
    payload: id
})
export const logout = () => ({
    type: 'LOGOUT'
})
export const auth = (user) => ({
    type: 'AUTH',
    payload: user
})
export const unauth = () => ({
    type: 'UNAUTH'
})
export const getCurrency = (data) => ({
    type: 'GET_CURRENCY',
    payload: data
})
export const addCurrency = (currency) => ({
    type: 'ADD_CURRENCY',
    payload: currency
})
export const removeCurrency = (currency) => ({
    type: 'REMOVE_CURRENCY',
    payload: currency
})
export const flushCurrency = (user) => ({
    type: 'FLUSH_CURRENCY',
    payload: user
})
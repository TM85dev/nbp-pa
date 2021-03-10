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
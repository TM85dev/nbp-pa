const usersReducer = (state = [
    {
        id: 0,
        name: 'demo1',
        email: 'demo1@demo.pl',
        password: 'demodemo1',
        isLogin: false
    },
    {
        id: 1,
        name: 'demo2',
        email: 'demo2@demo.pl',
        password: 'demodemo2',
        isLogin: false
    }
], action) => {
    switch(action.type) {
        case 'LOGIN':
            return state.map(user => ({
                ...user,
                isLogin: user.id === action.payload ? true : false
            }));
        case 'LOGOUT':
            return state.map(user => ({
                ...user,
                isLogin: false
            }))
        default:
            return state
    }
}

export default usersReducer;
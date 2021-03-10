const authReducer = (state = {}, action) => {
    switch(action.type) {
        case 'AUTH':
            return {
                ...action.payload,
                isLogin: true
            };
        case 'UNAUTH':
            return {};
        default:
            return state
    }
}

export default authReducer;
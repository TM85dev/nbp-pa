const userCurrencyReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CURRENCY':
            return state.concat(action.payload);
            // state.concat(action.payload);
        case 'REMOVE_CURRENCY':
            return state.filter(item => item.code !== action.payload.code || item.user !== action.payload.user);
        case 'FLUSH_CURRENCY':
            return state.filter(item => item.user !== action.payload);
        default:
            return state;
    }
}

export default userCurrencyReducer;
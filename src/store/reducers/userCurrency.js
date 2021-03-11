const userCurrencyReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CURRENCY':
            return state.concat(action.payload);
        case 'REMOVE_CURRENCY':
            return state.filter(item => item.id !== action.payload.id);
        case 'FLUSH_CURRENCY':
            return [];
        default:
            return state;
    }
}

export default userCurrencyReducer;
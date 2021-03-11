const currencyReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_CURRENCY':
            return action.payload
        default:
            return state
    }
}

export default currencyReducer
const dateReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_DATE':
            return action.payload
        default:
            return state;
    }
}

export default dateReducer;
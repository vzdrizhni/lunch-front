const allItemsReducer = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_ALL_ITEMS':
            return !state
        default:
            return state;
    }
}

export default allItemsReducer
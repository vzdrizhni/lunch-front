const triggerReducer = (state = true, action) => {
    switch (action.type) {
        case 'TRIGGER':
            return !state
        default:
            return state;
    }
}

export default triggerReducer;
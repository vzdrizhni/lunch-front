const INITIAL_STATE = []

const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            console.log(action.payload);
            return [
                ...state,
                action.payload
            ]
        case 'REMOVE_NOTIFICATION':
            return [...state.slice(1, 5)]
        default:
            return state;
    }
}

export default notificationReducer
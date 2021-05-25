const INITIAL_STATE = []

const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return [
                ...state,
                action.payload
            ]
        case 'REMOVE_NOTIFICATION':
            return [...state.slice(0, 1)]
        case orderActionTypes.EMPTY_ORDER:
            return []
        default:
            return state;
    }
}

export default notificationReducer
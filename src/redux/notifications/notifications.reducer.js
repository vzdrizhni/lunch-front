const INITIAL_STATE = []

const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            action.payload["checked"] = false
            if (state.length >= 5) {
                console.log('gotcha');
                return [
                    ...state.slice(1, 5),
                    action.payload
                ]
            }
            return [
                ...state,
                action.payload
            ]
        case 'REMOVE_NOTIFICATION':
            return [...state.slice(1, 6)]
        default:
            return state;
    }
}

export default notificationReducer
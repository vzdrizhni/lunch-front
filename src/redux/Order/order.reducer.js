import orderActionTypes from './order.types'

const INITIAL_STATE = []

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case orderActionTypes.ADD_ITEMS_TO_ORDER:
            return [
                ...state,
                action.payload
            ]
        case orderActionTypes.REMOVE_ITEM:
            return [...state.filter(item => item.id !== action.payload)]
        case orderActionTypes.EMPTY_ORDER:
            return []
        default:
            return state;
    }
}

export default userReducer
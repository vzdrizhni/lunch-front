import menuActionsTypes from './menu.types'

const INITIAL_STATE = [];

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case menuActionsTypes.ADD_ITEMS_TO_MENU:
            return [...state, action.payload]
        // case menuActionsTypes.SET_MENU_ITEMS:
        //     return [...state, action.payload]
        default:
            return state;
    }
}

export default menuReducer
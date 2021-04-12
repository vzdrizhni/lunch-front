import menuActionsTypes from './menu.types'

const INITIAL_STATE = [];

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case menuActionsTypes.ADD_ITEMS_TO_MENU:
            return [...action.payload]
    case menuActionsTypes.FILTER_MENU:
        return [...state.filter(item => item.menu_item_type !== action.payload.menu_item_type)]
    case menuActionsTypes.ADD_ITEM_TO_MENU:
        return [...state, action.payload]
        default:
            return state;
    }
}

export default menuReducer
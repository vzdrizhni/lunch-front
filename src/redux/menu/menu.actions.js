import menuActionsTypes from './menu.types'

export const addItem = (items) => ({
    type: menuActionsTypes.ADD_ITEMS_TO_MENU,
    payload: items,
})
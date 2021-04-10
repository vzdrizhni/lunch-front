import menuActionsTypes from './menu.types'

export const addItems = (items) => ({
    type: menuActionsTypes.ADD_ITEMS_TO_MENU,
    payload: items,
})

export const addItem = (items) => ({
    type: menuActionsTypes.ADD_ITEM_TO_MENU,
    payload: items,
})

export const filterMenu = (items) => ({
    type: menuActionsTypes.FILTER_MENU,
    payload: items,
})
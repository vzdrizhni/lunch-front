import orderActionsTypes from './order.types'

export const addItem = (items) => ({
    type: orderActionsTypes.ADD_ITEMS_TO_ORDER,
    payload: items,
})

export const removeItem = (items) => ({
    type: orderActionsTypes.REMOVE_ITEM,
    payload: items,
})

export const emptyOrder = () => ({
    type: orderActionsTypes.EMPTY_ORDER,
})
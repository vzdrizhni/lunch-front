import orderActionsTypes from './order.types'

export const addItem = (items) => ({
    type: orderActionsTypes.ADD_ITEMS_TO_ORDER,
    payload: items,
})
export const addNotification = (item) => ({
    type: 'ADD_NOTIFICATION',
    payload: item,
})

export const removeFirstNotification = () => ({
    type: 'REMOVE_NOTIFICATION'
})
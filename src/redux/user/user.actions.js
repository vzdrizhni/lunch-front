import userActionTypes from './user.types'

export const setUser = (userData) => ({
    type: userActionTypes.SET_USER,
    payload: userData
})
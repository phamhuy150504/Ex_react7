import { ADD_TO_CART, IncreaseDecrease, REMOVE_SHOE } from "./Contants";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload
})

export const handleIncreaseDecrease = (payload) => ({
  type: IncreaseDecrease,
  payload: {
    check : payload.check,
    id: payload.id
  }
})

export const removeShoeInCart = (payload) => ({
  type: REMOVE_SHOE,
  payload
})


import dataShoe from '../data/dataShoe.json'
import { ADD_TO_CART, IncreaseDecrease, REMOVE_SHOE } from './Contants'


const initialState = {
    listShoe: dataShoe,
    listCartShoe: []
}

export const ShoeReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const cloneListCartShoe = [...state.listCartShoe]
      let index = cloneListCartShoe.findIndex((item => item.id === payload.id))
      index === -1 ?  cloneListCartShoe.push({...payload, quantity: 1}) : cloneListCartShoe[index].quantity += 1
      
      return {...state, listCartShoe: cloneListCartShoe} 
    } 
    case IncreaseDecrease: {
      const cloneListCartShoe = [...state.listCartShoe]

      let index = cloneListCartShoe.findIndex(item => item.id === payload.id)

      index !== -1 && payload.check ? cloneListCartShoe[index].quantity += 1 
      : cloneListCartShoe[index].quantity === 1 ? cloneListCartShoe[index].quantity = 1 : cloneListCartShoe[index].quantity -= 1

      return {...state, listCartShoe: cloneListCartShoe}
    }
    case REMOVE_SHOE: {
      const cloneListCartShoe = [...state.listCartShoe];
      let newListCartShoe = cloneListCartShoe.filter(item => item.id !== payload)
      
      return {...state, listCartShoe: newListCartShoe} 
    }
    default: {
      return {...state}
    }
  }
}


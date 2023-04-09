import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'

export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  function addCart(product) {
    return dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })
  }

  function removeFromCart(product) {
    return dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    })
  }

  function subtractCart(product) {
    return dispatch({
      type: 'SUBTRACT_FROM_CART',
      payload: product,
    })
  }

  function clearCart() {
    return dispatch({
      type: 'CLEAR_CART',
    })
  }

  return { state, addCart, removeFromCart, clearCart, subtractCart }
}

export function CartProvider({ children }) {
  const { state, addCart, removeFromCart, clearCart, subtractCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{ cart: state, addCart, removeFromCart, clearCart, subtractCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

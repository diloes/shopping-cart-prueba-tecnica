import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart() {
  const cartContext = useContext(CartContext)

  // Por si lo utilizamos fuera del provider
  if (cartContext === undefined) {
    throw new Error(
      'Debes utilizar useCart en un componente que esté envuelto por CartProvider'
    )
  }

  return cartContext
}

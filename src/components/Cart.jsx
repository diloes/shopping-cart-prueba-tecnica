import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icon'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem'
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addCart, subtractCart, removeFromCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addCart={() => addCart(product)}
              subtractCart={() => subtractCart(product)}
              removeFromCart={() => removeFromCart(product)}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

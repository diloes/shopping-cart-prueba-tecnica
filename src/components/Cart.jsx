import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icon'
import './Cart.css'
import { useCart } from '../hooks/useCart'

function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addCart,
  subtractCart,
  removeFromCart,
}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Ud: {quantity}</small>
        <button onClick={addCart}>+</button>
        <button onClick={subtractCart}>-</button>
        <button onClick={removeFromCart}>
          <RemoveFromCartIcon />
        </button>
      </footer>
    </li>
  )
}

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

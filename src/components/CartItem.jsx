import { RemoveFromCartIcon } from './Icon'

export function CartItem({
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

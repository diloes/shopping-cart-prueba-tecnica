import './Products.css'
import { AddToCartIcon } from './Icon'
import { useCart } from '../hooks/useCart'

export function Products({ products }) {
  const { addCart } = useCart()

  return (
    <main className='products'>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <p>{product.description}</p>
            <div>
              <button onClick={() => addCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

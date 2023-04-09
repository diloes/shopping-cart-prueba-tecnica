import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  function handleChangeMinPrice(e) {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }))
  }

  function handleChangeCategory(e) {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio mínimo</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} name='category' onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Smartphones</option>
          <option value='home-decoration'>Hogar</option>
        </select>
      </div>
    </section>
  )
}

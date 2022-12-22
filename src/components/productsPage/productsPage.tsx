import './productsPage.scss'
import { products } from '../../data/data'
import { ProductCard } from '../productCard/productCard'
import { ProductViewControl } from '../productViewControl/productViewControl'
import { useState } from 'react'
import { FilterPanel } from '../filterPanel/filterPanel'
import { IProduct } from '../../types'
import { useSearchParams } from 'react-router-dom'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  let classes = ''
  searchParams.get('view') === 'list'
    ? (classes = 'products-page__products products-page__products--list')
    : (classes = 'products-page__products')
  console.log('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  function filteredHandler(filteredProductFromComponent: IProduct[]) {
    setFilteredProducts(filteredProductFromComponent)
  }
  return (
    <section className="products-page">
      <aside className="products-page__filter">
        <FilterPanel onFiltered={filteredHandler} products={products} />
      </aside>
      <div className="products-page__content">
        <ProductViewControl
          className={'products-page__view-control view-control'}
        />
        <div className={classes}>
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  )
}

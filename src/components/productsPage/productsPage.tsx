import './productsPage.scss'
import { products } from '../../data/data'
import { ProductCard } from '../productCard/productCard'
import { ProductViewControl } from '../productViewControl/productViewControl'
import { useState } from 'react'
import { FilterPanel } from '../filterPanel/filterPanel'
import { IProduct } from '../../types'

export default function ProductsPage({
  numHandler,
}: {
  numHandler: (num: number) => void
}) {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [classesProducts, setClassesProducts] = useState(
    'products-page__products',
  )
  function changeClassesHandler(str: string) {
    const classes =
      str === 'gridBtn'
        ? 'products-page__products'
        : 'products-page__products products-page__products--list'
    setClassesProducts(classes)
  }
  function filteredHandler(filteredProductFromComponent: IProduct[]) {
    console.log(filteredProductFromComponent)
    setFilteredProducts(filteredProductFromComponent)
  }
  return (
    <section className="products-page">
      <aside className="products-page__filter">
        <FilterPanel onFiltered={filteredHandler} products={products} />
      </aside>
      <div className="products-page__content">
        <ProductViewControl
          onClick={changeClassesHandler}
          className={'products-page__view-control view-control'}
        />
        <div className={classesProducts}>
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                numHandler={numHandler}
                product={product}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

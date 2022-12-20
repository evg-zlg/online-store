import './productsPage.scss'
import { products } from '../../data/data'
import { ProductCard } from '../productCard/productCard'
import { ProductViewControl } from '../productViewControl/productViewControl'
import { useState } from 'react'

export default function ProductsPage() {
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
  return (
    <section className="products-page">
      <aside className="products-page__filter">панель</aside>
      <div className="products-page__content">
        <ProductViewControl
          onClick={changeClassesHandler}
          className={'products-page__view-control view-control'}
        />
        <div className={classesProducts}>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  )
}

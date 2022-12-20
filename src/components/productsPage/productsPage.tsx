import './productsPage.scss'
import { products } from '../../data/data'
import { ProductCard } from '../productCard/productCard'
import { ProductViewControl } from '../productViewControl/productViewControl'

export default function ProductsPage() {
  return (
    <section className="products-page">
      <aside className="products-page__filter">панель</aside>
      <div className="products-page__content">
        <ProductViewControl
          className={'products-page__view-control view-control'}
        />
        <div className="products-page__products">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  )
}

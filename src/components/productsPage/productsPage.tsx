import './productsPage.scss'
import { products } from '../../data/data'
import { ProductCard } from '../productCard/productCard'

export default function ProductsPage() {
  return (
    <section className="products-page">
      <aside className="products-page__filter">панель</aside>
      <main className="products-page__products">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </main>
    </section>
  )
}

import './productsPage.scss'
import { products } from '../../data/data'
import { ProductCard } from '../productCard/productCard'

export default function ProductsPage() {
  return (
    <section className="product-page">
      <aside className="product-page__filter">панель</aside>
      <main className="product-page__products">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </main>
    </section>
  )
}

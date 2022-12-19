import './productsPage.scss'
// import  { IProduct }  from '../../types';
import { products } from '../../data/data'
import { ProductCard } from '../productCard/productCard'
import { NavLink } from 'react-router-dom'

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

import './productsPage.scss'
// import  { IProduct }  from '../../types';
import { products } from '../../data/data'
import { ProductCard } from '../productCard/productCard'

export default function ProductsPage() {
  return (
    <>
      <h2>products:</h2>
      {products.map((product) => {
        return <ProductCard product={ product }/>
      })}
    </>
  )
}

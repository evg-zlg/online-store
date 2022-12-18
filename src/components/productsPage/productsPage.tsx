import './productsPage.scss'
// import  { IProduct }  from '../../types';
import { products } from '../../data/data'

export default function ProductsPage() {
  return (
    <>
      <h2>products:</h2>
      {products.map((product) => {
        <p>{product.id}</p>
      })}
    </>
  )
}

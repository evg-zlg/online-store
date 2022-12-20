import { IProduct } from '../../types'
import { NavLink } from 'react-router-dom'
import { ProductItem } from '../productItemPage/productItemPage'
import './productCard.scss'

interface ProductCardProps {
  product: IProduct
}

export function ProductCard({ product }: ProductCardProps) {
  console.log(product.images[0])
  return (
    <div className="card">
      <NavLink className="card__link-title" to={'/item/' + product.id}>
        <h2 className="card__title">{product.name}</h2>
      </NavLink>
      <img
        className="card__img"
        src={product.images[0]}
        alt={product.name}
      ></img>
      <p className="card__count">Остаток: {product.count}</p>
      <div className="card__buttons">
        <button className="card__btn-cart">в корзину</button>
        <NavLink className="card__link-inf" to={'/item/' + product.id}>
          <button className="card__btn-inf">инфо</button>
        </NavLink>
      </div>
    </div>
  )
}

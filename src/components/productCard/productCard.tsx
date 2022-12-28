import { IProduct } from '../../types'
import { NavLink } from 'react-router-dom'
import { ProductItem } from '../productItemPage/productItemPage'
import './productCard.scss'
import CartBtn from '../addToCartBtn/addToCartBtn'

interface ProductCardProps {
  product: IProduct

  numHandler: (num: number) => void
}

export function ProductCard({ product, numHandler }: ProductCardProps) {
  const imgSrc = require('../../data' + product.images[0].slice(1))
  return (
    <div className="card">
      <NavLink className="card__link-title" to={'/item/' + product.id}>
        <h2 className="card__title">{product.name}</h2>
      </NavLink>
      <img className="card__img" src={imgSrc} alt={product.name}></img>
      <div className="card__info">
        <p className="card__price">Цена: {product.price}</p>
        <p className="card__count">Остаток: {product.count}</p>
      </div>
      <div className="card__buttons">
        <CartBtn onClick={numHandler} id={product.id} />
        <NavLink className="card__link-inf" to={'/item/' + product.id}>
          <button className="card__btn-inf">инфо</button>
        </NavLink>
      </div>
    </div>
  )
}

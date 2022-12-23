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
        <CartBtn onClick={numHandler} id={product.id} />
        {/* <button className="card__btn-cart">в корзину</button> */}
        <NavLink className="card__link-inf" to={'/item/' + product.id}>
          <button className="card__btn-inf">инфо</button>
        </NavLink>
      </div>
    </div>
  )
}

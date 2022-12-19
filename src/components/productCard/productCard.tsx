import { IProduct } from '../../types'
import './productCard.scss'

interface ProductCardProps {
  product: IProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const imgLink = '../../data/images' + product.images[0]
  return (
    <div className="card">
      <h2 className="card__title">{product.name}</h2>
      <p className="card__category">{product.category}</p>
      <img
        className="card__img"
        src={product.images[0]}
        alt={product.name}
      ></img>
      <p className="card__description">{product.description}</p>
      <p className="card__count">{product.count}</p>
      <button className="card__btn btn">bay</button>
    </div>
  )
}

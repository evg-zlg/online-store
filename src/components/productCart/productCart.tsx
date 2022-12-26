import './productCart.scss'
import { products } from '../../data/data'
import { useState } from 'react'

interface ProductCartProps {
  cartId: number
  cardInd: number
}

export function ProductCart({ cartId, cardInd }: ProductCartProps) {
  const [count, setCount] = useState(1)
  const handleDecrement = () => {
    if (count > 1) {
      //надо будет поставить 0 и при значении 0 удалять товар
      setCount(() => count - 1)
    }
  }
  const handleIncrement = () => {
    setCount(() => count + 1)
  }

  return (
    <>
      <div className="cart-products__item item">
        <div className="item__num">{cardInd + 1}</div>
        <img
          className="item__img"
          src={products[cartId - 1].images[0]}
          alt={products[cartId - 1].name}
        ></img>
        <div className="item__name">{products[cartId - 1].name}</div>
        <div className="item__category">{products[cartId - 1].category}</div>
        <div className="item__count">{products[cartId - 1].count}</div>
        <div className="item__price">{products[cartId - 1].price} руб.</div>
        <div className="item__input-group input-group">
          <button className="input-group__btn" onClick={handleDecrement}>
            -
          </button>
          <div className="input-group__text">{count}</div>
          <button className="input-group__btn" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="item__sum">
          {products[cartId - 1].price * count} руб.
        </div>
      </div>
    </>
  )
}

import './productCart.scss'
import { products } from '../../data/data'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

interface ProductCartProps {
  cartId: number
  cardInd: number
  storageCallback: (storage: Record<string, number>) => void
  deleteItemCallback: (id: number) => void
}

export function ProductCart({
  cartId,
  cardInd,
  storageCallback,
  deleteItemCallback,
}: ProductCartProps) {
  const cartlocal = JSON.parse(localStorage.getItem('object') || '{}')
  const [count, setCount] = useState(cartlocal[cartId])

  const handleDecrement = () => {
    if (count > 0) {
      if (count === 1) {
        deleteItemCallback(cartId)
        const cartlocal = JSON.parse(localStorage.getItem('object') || '{}')
        delete cartlocal[cartId]
        localStorage.setItem('object', JSON.stringify(cartlocal))
        storageCallback(cartlocal)
      }
      setCount(() => count - 1)
    }
  }
  const handleIncrement = () => {
    if (count < products[cartId - 1].count) {
      setCount(() => count + 1)
    }
  }

  useEffect(() => {
    const cartlocal = JSON.parse(localStorage.getItem('object') || '{}')
    cartlocal[cartId] = count
    localStorage.setItem('object', JSON.stringify(cartlocal))
    storageCallback(cartlocal)
  }, [count, storageCallback, cartId])

  return (
    <>
      <div className="cart-products__item item">
        <div className="item__num">{cardInd + 1}</div>
        <img
          className="item__img"
          src={require('../../data' + products[cartId - 1].images[0].slice(1))}
          alt={products[cartId - 1].name}
        ></img>
        <NavLink className="item__link" to={'/item/' + cartId}>
          <div className="item__name">{products[cartId - 1].name}</div>
        </NavLink>
        <div className="item__category">{products[cartId - 1].category}</div>
        <div className="item__count">{products[cartId - 1].count}</div>
        <div className="item__price">{products[cartId - 1].price} руб.</div>
        <div className="item__input-group input-group">
          <button className="input-group__btn" onClick={handleDecrement}>
            -
          </button>
          <div className="input-group__text">{count}</div>
          <button
            className={
              count === products[cartId - 1].count
                ? 'input-group__btn-plus input-group__btn-plus--disabled'
                : 'input-group__btn-plus'
            }
            onClick={handleIncrement}
          >
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

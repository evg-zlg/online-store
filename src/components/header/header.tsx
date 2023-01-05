import './header.scss'
import { NavLink } from 'react-router-dom'
import { products } from '../../data/data'

export default function Header() {
  const localArr = JSON.parse(localStorage.getItem('object') || '{}')
  const cartArr = JSON.parse(localStorage.getItem('cart') || '[]').length
  let price = 0
  let count = 0
  for (const product of products) {
    if (Object.keys(localArr).includes(product.id.toString())) {
      price += product.price * localArr[product.id]
      count += localArr[product.id]
    }
  }
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <div className="header__logo"></div>
        </NavLink>
        <div className="header__basket basket">
          <div
            className={
              cartArr === 0
                ? 'basket__price'
                : 'basket__price basket__price--active'
            }
          >
            Сумма:
            <span className="total__price">{price}</span>
          </div>
          <NavLink to={'/cart'}>
            <div
              className={
                cartArr === 0
                  ? 'basket__count'
                  : 'basket__count basket__count--active'
              }
            >
              {count}
            </div>
            <div className="basket__img"></div>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

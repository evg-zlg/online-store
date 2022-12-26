import './header.scss'
import { NavLink } from 'react-router-dom'
import { products } from '../../data/data'

export default function Header({
  num,
  totalPrice,
  totalCount,
}: {
  num: number
  totalPrice: number
  totalCount: number
}) {
  const localArr = JSON.parse(localStorage.getItem('object') || '{}')
  // let sumArr: number[] = Object.values(localArr)
  // let sum = 0
  // for (let i = 0; i < sumArr.length; i++) {
  //   sum += sumArr[i]
  // }
  // console.log(sum)
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
          <div className="basket__price total">
            Total:
            <span className="total__price">{price}</span>
          </div>
          <NavLink to={'/cart'}>
            <div className="basket__count">{count}</div>
            <div className="basket__img"></div>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

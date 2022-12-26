import './header.scss'
import { NavLink } from 'react-router-dom'

export default function Header({ num }: { num: number }) {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <div className="header__logo"></div>
        </NavLink>
        <div className="header__basket basket">
          <div className="basket__price total">
            Total:
            <span className="total__price">0</span>
          </div>
          <NavLink to={'/cart'}>
            <div className="basket__count">{num}</div>
            <div className="basket__img"></div>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

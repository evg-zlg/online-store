import './header.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
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
          <div className="basket__count">0</div>
          <div className="basket__img"></div>
        </div>
      </div>
    </header>
  )
}

import './header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"></div>
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

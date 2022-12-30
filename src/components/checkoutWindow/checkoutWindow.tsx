import './checkoutWindow.scss'
import { NavLink } from 'react-router-dom'
import { products } from '../../data/data'

interface CheckoutWindow {
  active: boolean
  setActive: (bool: boolean) => void
}

export default function CheckoutWindow({ active, setActive }: CheckoutWindow) {
  return (
    <>
      <section
        className={
          active ? 'checkout-window checkout-window--active' : 'checkout-window'
        }
        onClick={() => setActive(false)}
      >
        <div
          className="checkout-window__popup popup"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="popup__close close" onClick={() => setActive(false)}>
            <span className="close__line"></span>
            <span className="close__line"></span>
          </div>
          <p className="popup__title">Персональные данные</p>
          <div className="popup__name">Имя</div>
          <div className="popup__telephone">Телефон</div>
          <div className="popup__mail">E-mail</div>
          <div className="popup__adress">Адрес</div>
          <div className="popup__card"></div>
          <button className="popup__btn">Подтвердить заказ</button>
        </div>
      </section>
    </>
  )
}

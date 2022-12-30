import './checkoutWindow.scss'
import { NavLink } from 'react-router-dom'
import { products } from '../../data/data'

export default function CheckoutWindow() {
  return (
    <>
      <section className="checkout-window">
        <div className="checkout-window__popup popup">
          <div className="popup__close close">
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

import './cartPage.scss'
import { ProductCart } from '../productCart/productCart'

export default function CartPage() {
  const localArr = JSON.parse(localStorage.getItem('cart') || '[]')
  return (
    <>
      <section className="cart-page">
        <div className="cart-page__container">
          <div className="cart-page__content content">
            <div className="content__cart-products cart-products">
              <div className="content__title title">
                <p className="title__num">№</p>
                <p className="title__name">Товар</p>
                <p className="title__category">Категория</p>
                <p className="title__count">Склад</p>
                <p className="title__price">Цена</p>
                <p className="title__pagination">Количество</p>
                <p className="title__sum">Итого</p>
              </div>
              {localArr.map((id: number, index: number) => {
                return <ProductCart key={id} cartId={id} cardInd={index} />
              })}
            </div>
            <div className="content__pagination pagination">
              <p>Страница: </p>
              <div className="pagination__prev"></div>
              <div className="pagination__count"></div>
              <div className="pagination__next"></div>
            </div>
          </div>
          <div className="cart-page__summary">
            <p>Детали заказа:</p>
          </div>
        </div>
      </section>
    </>
  )
}

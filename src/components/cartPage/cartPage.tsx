import './cartPage.scss'
import { ProductCart } from '../productCart/productCart'
import { useState } from 'react'
import { products } from '../../data/data'

export default function CartPage({
  appCallback,
}: {
  appCallback: (a: number, b: number) => void
}) {
  // const localArr = JSON.parse(localStorage.getItem('cart') || '[]')
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  let [localArr, setLocalArr] = useState(
    JSON.parse(localStorage.getItem('cart') || '[]'),
  )
  const deleteItemCallback = (id: number) => {
    const newLocalArr = localArr.filter((productid: number) => productid !== id)
    localStorage.setItem('cart', JSON.stringify(newLocalArr))
    const objectParse = JSON.parse(localStorage.getItem('object') || '{}')
    delete objectParse[id]
    localStorage.setItem('object', JSON.stringify(objectParse))
    setLocalArr(newLocalArr)
  }
  const storageCallback = (storage: Record<string, number>) => {
    let price = 0
    let count = 0
    for (const product of products) {
      if (Object.keys(storage).includes(product.id.toString())) {
        price += product.price * storage[product.id]
        count += storage[product.id]
      }
    }
    setTotalPrice(price)
    setTotalCount(count)
    appCallback(price, count)
  }

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
                return (
                  <ProductCart
                    key={id}
                    cartId={id}
                    cardInd={index}
                    storageCallback={storageCallback}
                    deleteItemCallback={deleteItemCallback}
                  />
                )
              })}
            </div>
            <div className="content__pagination pagination">
              <p>Страница: </p>
              <button>{'<'}</button>
              {/* <input type="text" value={currentPage}></input> */}
              <button>{'>'}</button>
              <div className="pagination__prev"></div>
              <div className="pagination__count"></div>
              <div className="pagination__next"></div>
            </div>
          </div>
          <div className="cart-page__summary">
            <p>Детали заказа:</p>
            <div>
              <p>Колличество {totalCount}</p>
              <p>Итого {totalPrice}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

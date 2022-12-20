import './productItemPage.scss'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../types'
import { products } from '../../data/data'
import React, { useState } from 'react'

export function ProductItem() {
  const params = useParams()
  const product: IProduct = products.filter(
    (el) => el.id === Number(params.id),
  )[0]
  const [imgScr, setImgScr] = useState(
    require('../../data' + product.images[0].slice(1)),
  )
  return (
    <>
      <section className="product-page">
        <div className="product-page__crumbs crumbs">
          <span className="crumbs__link">Магазин</span> {'>>'}
          {product.category} {'>>'} {product.name}
        </div>
        <div className="product-page__item">
          <div className="product-page__images images">
            <div>
              <img src={imgScr} alt={product.name} className="images__main" />
            </div>
            <div className="images__miniature">
              {product.images.map((img) => {
                const src = require('../../data' + img.slice(1))
                return (
                  <img
                    key={img}
                    className="images__miniature_img"
                    alt={product.name}
                    src={src}
                    onClick={() => setImgScr(src)}
                  ></img>
                )
              })}
            </div>
          </div>
          <div className="product-page__info info">
            <h2 className="info__title">{product.name}</h2>
            <div className="info__price">{product.price} руб.</div>
            <div className="product-page__button button">
              <button className="button__add">Добавить в корзину</button>
              <button className="button__buy">Купить сейчас</button>
            </div>
            <div className="info__description">
              Описание:{' '}
              {product.description.map((e) => (
                <p>{e}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

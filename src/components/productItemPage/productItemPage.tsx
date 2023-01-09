import './productItemPage.scss'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../types'
import { products } from '../../data/data'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddToCartBtn from '../addToCartBtn/addToCartBtn'
import BuyNowBtn from '../buyNowBtn/buyNowBtn'
import { Carousel } from '../carousel/carousel'

interface IProductItemProps {
  numHandler: (num: number) => void
  active: boolean
  setActive: (bool: boolean) => void
}

export function ProductItemPage({
  numHandler,
  active,
  setActive,
}: IProductItemProps) {
  const params = useParams()
  const product: IProduct = products.filter(
    (el) => el.id === Number(params.id),
  )[0]
  const startImgSrc = product.images[0]
  const [imgScr, setImgScr] = useState(startImgSrc)
  const hasProduct = product ? true : false
  return (
    <>
      {hasProduct && (
        <section className="product-page">
          <div className="product-page__crumbs crumbs">
            <NavLink className="crumbs__link" to="/">
              <span className="crumbs__title">Магазин {''}</span>
            </NavLink>
            {'>>'} {product.category} {'>>'} {product.name}
          </div>
          <div className="product-page__item">
            <div className="product-page__images images">
              <div className="images__miniature miniature">
                {product.images.map((img) => {
                  const src = require('../../data' + img.slice(1))
                  return (
                    <img
                      key={img}
                      className="miniature__img"
                      alt={product.name}
                      src={src}
                      onClick={() => setImgScr(img)}
                    ></img>
                  )
                })}
              </div>
              <div>
                <Carousel
                  images={product.images}
                  currentImage={imgScr}
                  alt={product.name}
                  className={'images__main'}
                />
              </div>
            </div>
            <div className="product-page__info info">
              <h2 className="info__title">{product.name}</h2>
              <div className="info__price">{product.price} руб.</div>
              <div className="product-page__button button">
                <AddToCartBtn onClick={numHandler} id={product.id} />
                <NavLink to={'/cart'} onClick={() => setActive(true)}>
                  <BuyNowBtn onClick={numHandler} id={product.id} />
                </NavLink>
              </div>
              <div className="info__category">
                <span className="info__text">Категория:</span>{' '}
                {product.category}
              </div>
              <div className="info__description">
                <span className="info__text">Описание:</span>{' '}
                {product.description.map((e, key) => (
                  <p key={key}>{e}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {!hasProduct && <h1>Товар {params.id} не найден</h1>}
    </>
  )
}

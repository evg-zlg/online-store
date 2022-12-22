import React, { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../types'
import { products } from '../../data/data'

const Cart = ({
  onClick,
  id,
}: {
  onClick: (num: number) => void
  id: number
}) => {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]')
  const callbackNum = () => {
    if (num === 1) {
      setNum(-1)
      cart.push(id)
    } else {
      setNum(1)
      cart = cart.filter((productid: number) => productid !== id)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    onClick(num)
  }
  const [num, setNum] = useState(cart.includes(id) ? -1 : 1)
  return (
    <button onClick={callbackNum} className="button__add">
      {num === 1 ? 'Добавить в корзину' : 'Убрать из корзины'}
    </button>
  )
}

export default Cart

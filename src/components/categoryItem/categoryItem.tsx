import './categoryItem.scss'
import { IProduct } from '../../types'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface ICategoryItemProps {
  category: string
  products: IProduct[]
  productCurrent: IProduct[]
  type: string
  index?: number
}

export const CategoryItem = ({
  category,
  products,
  productCurrent,
  type,
  index,
}: ICategoryItemProps) => {
  const categoryID = type === 'categories' ? getCategoryID() : String(index)
  const [searchParams, setSearchParams] = useSearchParams()
  let checked = searchParams.has(categoryID)
  let productCurrentCount = productCurrent.filter(
    (productCurrent) => productCurrent.category === category,
  ).length
  const productTotalCount = products.filter(
    (product) => product.category === category,
  ).length
  function getCategoryID() {
    return products.filter((product) => product.category === category)[0]
      .categoryID
  }
  function clickCheckboxHandler() {
    const url = new URL(window.location.href)
    searchParams.get(categoryID) === categoryID
      ? url.searchParams.delete(categoryID)
      : url.searchParams.append(categoryID, categoryID)
    setSearchParams(url.searchParams)
  }
  return (
    <li className="list__item">
      <label className="list__label" htmlFor={category}>
        <input
          onClick={clickCheckboxHandler}
          className="list__checkbox"
          checked={searchParams.has(categoryID)}
          onChange={() => {
            checked = !checked
          }}
          type="checkbox"
          id={category}
        ></input>
        {category.slice(0, 1).toUpperCase() + category.slice(1).toLowerCase()}
      </label>
      <label className="list__results">{`(${productCurrentCount}/${productTotalCount})`}</label>
    </li>
  )
}

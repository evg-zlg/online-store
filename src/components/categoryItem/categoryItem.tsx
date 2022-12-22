import './categoryItem.scss'
import { IProduct } from '../../types'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface ICategoryItemProps {
  category: string
  products: IProduct[]
  productCurrent: IProduct[]
}

export const CategoryItem = ({
  category,
  products,
  productCurrent,
}: ICategoryItemProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [checkedItem, setCheckedItem] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(productCurrent)
  const productCurrentCount = products.filter(
    (product) => product.category === category,
  ).length
  const productTotalCount = products.filter(
    (product) => product.category === category,
  ).length
  function getCategoryID() {
    return products.filter((product) => product.category === category)[0]
      .categoryID
  }
  const categoryID = getCategoryID()
  function clickCheckboxHandler() {
    const url = new URL(window.location.href)
    searchParams.get(categoryID) === categoryID
      ? url.searchParams.delete(categoryID)
      : url.searchParams.append(categoryID, categoryID)
    setSearchParams(url.searchParams)
    setCheckedItem(!checkedItem)
    checkedItem
      ? setFilteredProducts((prev) => {
          return prev.filter((product) => product.category === category)
        })
      : setFilteredProducts(products)
  }
  return (
    <li className="list__item">
      <input
        onClick={clickCheckboxHandler}
        className="list__checkbox"
        type="checkbox"
        id={category}
      ></input>
      <label className="list__label" htmlFor={category}>
        {category.slice(0, 1).toUpperCase() + category.slice(1).toLowerCase()}
      </label>
      <label className="list__results">{`(${productCurrentCount}/${productTotalCount})`}</label>
    </li>
  )
}

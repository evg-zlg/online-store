import './categoryItem.scss'
import { IProduct } from '../../../types'
import { useState } from 'react'

interface ICategoryItemProps {
  products: IProduct[]
  onChange: (products: IProduct[]) => void
  category: string
}

export const CategoryItem = ({
  category,
  onChange,
  products,
}: ICategoryItemProps) => {
  const [wathFlagFilter, setWatchFlagFilter] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const watchCat = products.filter(
    (product) => product.category === category,
  ).length
  const [watchFilter, setWatchFilter] = useState(watchCat)
  function clickCheckboxHandler() {
    setWatchFlagFilter(!wathFlagFilter)
    wathFlagFilter
      ? setFilteredProducts((prev) => {
          return prev.filter((product) => product.category === category)
        })
      : setFilteredProducts(products)
    onChange(filteredProducts)
  }

  return (
    <li className="list__item">
      <input
        onClick={clickCheckboxHandler}
        className="list__checkbox"
        type="checkbox"
        id="first-input"
      ></input>
      <label className="list__label" htmlFor="first-input">
        {category}
      </label>
      <label className="list__results">{`(${watchFilter}/${watchCat})`}</label>
    </li>
  )
}

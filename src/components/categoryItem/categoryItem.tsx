import './categoryItem.scss'
import { IProduct } from '../../types'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

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
  const [searchParams, setSearchParams] = useSearchParams()
  const [wathFlagFilter, setWatchFlagFilter] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const watchCat = products.filter(
    (product) => product.category === category,
  ).length
  const [watchFilter, setWatchFilter] = useState(watchCat)
  function clickCheckboxHandler() {
    console.log(searchParams)
    const url = new URL(window.location.href)
    searchParams.get(category)
      ? url.searchParams.delete(category)
      : url.searchParams.append(category, category)
    setSearchParams(url.searchParams)
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

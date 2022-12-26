import './filterPanel.scss'
import { IProduct } from '../../types'
import { CategoryItem } from '../categoryItem/categoryItem'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { DualSlider } from '../dualSlider/dualSlider'
import { getMinPrice, getMaxPrice } from '../utility/utility'

interface IFilterPanelProps {
  products: IProduct[]
  filteredProducts: IProduct[]
  // onFiltered: (products: IProduct[]) => void
}

export const FilterPanel = ({
  products,
  filteredProducts,
}: IFilterPanelProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [copyText, setCopyText] = useState('Копировать ссылку')
  const [copyClass, setCopyClass] = useState('filter__copy')
  function getCategories() {
    const categories: string[] = []
    products.forEach((product) => {
      if (!categories.join('').includes(product.category)) {
        categories.push(product.category)
      }
    })
    return categories
  }
  function getCategoriesID() {
    const categoriesID: string[] = []
    products.forEach((product) => {
      if (!categoriesID.join('').includes(product.categoryID)) {
        categoriesID.push(product.categoryID)
      }
    })
    return categoriesID
  }
  const categoriesID = getCategoriesID()
  const resetHandler = () => {
    const url = new URL(window.location.href)
    categoriesID.forEach((cat) => {
      if (searchParams.has(cat)) {
        url.searchParams.delete(cat)
      }
      if (searchParams.has('search')) {
        url.searchParams.delete('search')
      }
    })
    setSearchParams(url.searchParams)
  }
  const copyHandler = () => {
    const url = new URL(window.location.href)
    navigator.clipboard.writeText(url.href)
    setCopyText('Ссылка скопированна')
    setCopyClass('filter__copy filter__copy--copied')
    setTimeout(() => {
      setCopyClass('filter__copy')
      setCopyText('Скопировать ссылку')
    }, 1500)
  }
  return (
    <section className="filter">
      <div className="filter__buttons">
        <button onClick={resetHandler} className="filter__reset">
          Сбросить фильтры
        </button>
        <button onClick={copyHandler} className={copyClass}>
          {copyText}
        </button>
      </div>
      <div className="filter__list list">
        <p className="list__title">Категория</p>
        {getCategories().map((cat) => {
          return (
            <CategoryItem
              key={cat}
              category={cat}
              products={products}
              productCurrent={filteredProducts}
            />
          )
        })}
      </div>
      <DualSlider
        className="filter__price"
        maxValue={getMaxPrice()}
        minValue={getMinPrice()}
        step={10}
        currency={'руб.'}
      />
    </section>
  )
}

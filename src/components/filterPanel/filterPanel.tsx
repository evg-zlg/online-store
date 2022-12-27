import './filterPanel.scss'
import { IProduct } from '../../types'
import { CategoryItem } from '../categoryItem/categoryItem'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { DualSlider } from '../dualSlider/dualSlider'

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
    url.searchParams.delete('maxprice')
    url.searchParams.delete('minprice')
    url.searchParams.delete('minstock')
    url.searchParams.delete('maxstock')
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
  function getMaxPriceFilteredProducts() {
    if (filteredProducts.length === 0) {
      return getMaxPrice()
    }
    const newProducts = []
    newProducts.push(...filteredProducts)
    return newProducts.sort((a, b) => a.price - b.price)[newProducts.length - 1]
      .price
  }
  function getMinPriceFilteredProducts() {
    if (filteredProducts.length === 0) {
      return getMinPrice()
    }
    const newProducts = []
    newProducts.push(...filteredProducts)
    return newProducts.sort((a, b) => a.price - b.price)[0].price
  }
  function getMaxPrice() {
    const newProducts = []
    newProducts.push(...products)
    return newProducts.sort((a, b) => a.price - b.price)[newProducts.length - 1]
      .price
  }
  function getMinPrice() {
    const newProducts = []
    newProducts.push(...products)
    return newProducts.sort((a, b) => a.price - b.price)[0].price
  }
  function getMaxStock() {
    const newProducts = []
    newProducts.push(...products)
    return newProducts.sort((a, b) => a.count - b.count)[newProducts.length - 1]
      .count
  }
  function getMinStock() {
    const newProducts = []
    newProducts.push(...products)
    return newProducts.sort((a, b) => a.count - b.count)[0].count
  }
  function getMaxStockFilteredProducts() {
    if (filteredProducts.length === 0) {
      return getMaxStock()
    }
    const newProducts = []
    newProducts.push(...filteredProducts)
    return newProducts.sort((a, b) => a.count - b.count)[newProducts.length - 1]
      .count
  }
  function getMinStockFilteredProducts() {
    if (filteredProducts.length === 0) {
      return getMinPrice()
    }
    const newProducts = []
    newProducts.push(...filteredProducts)
    return newProducts.sort((a, b) => a.count - b.count)[0].count
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
        type="price"
        maxValue={getMaxPrice()}
        minValue={getMinPrice()}
        leftValue={String(getMinPriceFilteredProducts())}
        rightValue={String(getMaxPriceFilteredProducts())}
        step={10}
        currency={'руб.'}
      />
      <DualSlider
        className="filter__stock"
        type="stock"
        maxValue={getMaxStock()}
        minValue={getMinStock()}
        leftValue={String(getMinStockFilteredProducts())}
        rightValue={String(getMaxStockFilteredProducts())}
        step={1}
        currency={''}
      />
    </section>
  )
}

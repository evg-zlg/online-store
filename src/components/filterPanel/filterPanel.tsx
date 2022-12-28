import './filterPanel.scss'
import { IProduct } from '../../types'
import { CategoryItem } from '../categoryItem/categoryItem'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { DualSlider } from '../dualSlider/dualSlider'

interface IFilterPanelProps {
  products: IProduct[]
  filteredProducts: IProduct[]
  categories: string[]
  tags: string[]
}

export const FilterPanel = ({
  products,
  filteredProducts,
  categories,
  tags,
}: IFilterPanelProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [copyText, setCopyText] = useState('Копировать ссылку')
  const [copyClass, setCopyClass] = useState('filter__copy')
  const resetHandler = () => {
    const url = new URL(window.location.href)
    url.searchParams.delete('categories')
    url.searchParams.delete('tags')
    url.searchParams.delete('search')
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
        <h2 className="filter__title">Категория</h2>
        {categories.map((cat, index) => {
          return (
            <CategoryItem
              type="categories"
              key={cat}
              item={cat}
              index={index}
              productCurrent={filteredProducts}
            />
          )
        })}
      </div>
      <div className="filter__tags tags">
        <h2 className="filter__title">Подборки</h2>
        <div className="tags__items">
          {tags.map((tag, index) => {
            return (
              <CategoryItem
                type="tags"
                key={tag}
                item={tag}
                index={index}
                productCurrent={filteredProducts}
              />
            )
          })}
        </div>
      </div>
      <DualSlider
        className="filter__price"
        type="price"
        title="Цена"
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
        title="В наличии"
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

import './productViewControl.scss'
import { useSearchParams } from 'react-router-dom'
import React, { useState } from 'react'

interface IProductViewControlProps {
  className: string
  countFilteredProducts: number
}

export const ProductViewControl = ({
  className,
  countFilteredProducts,
}: IProductViewControlProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [select, setSelect] = useState(searchParams.get('sort') || 'none')
  const url = new URL(window.location.href)

  function listBtnClickHandler() {
    if (searchParams.get('view') !== 'list') {
      url.searchParams.set('view', 'list')
    }
    setSearchParams(url.searchParams)
  }
  function gridBtnClickHandler() {
    if (searchParams.get('view') !== 'grid') {
      url.searchParams.set('view', 'grid')
    }
    setSearchParams(url.searchParams)
  }
  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const str = e.target.value
    const url = new URL(window.location.href)
    str
      ? url.searchParams.set('search', str)
      : url.searchParams.delete('search')
    setSearchParams(url.searchParams)
    return str
  }
  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const url = new URL(window.location.href)
    const value = e.target.value
    setSelect(value)
    value === 'none'
      ? url.searchParams.delete('sort')
      : url.searchParams.set('sort', value)
    setSearchParams(url.searchParams)
  }
  return (
    <div className={className}>
      <select
        className="view-control__select"
        value={select}
        onChange={handleSelect}
      >
        <option value="none">Сортировать по умолчанию</option>
        <option value="price-ask">По возрастанию цены</option>
        <option value="price-desk">По убыванию цены</option>
        <option value="stock-ask">По возрастанию остатка</option>
        <option value="stock-desk">По убыванию остатка</option>
      </select>
      <input
        className="view-control__search"
        placeholder="найти..."
        type="search"
        value={searchParams.get('search') || ''}
        onChange={searchHandler}
      ></input>
      <p className="view-control__found">
        {`Найдено товаров: `}
        <span className="view-control__count">{countFilteredProducts}</span>
      </p>
      <div className="view-control__views">
        <button
          onClick={listBtnClickHandler}
          className="view-control__list-btn"
        ></button>
        <button
          onClick={gridBtnClickHandler}
          className="view-control__grid-btn"
        ></button>
      </div>
    </div>
  )
}

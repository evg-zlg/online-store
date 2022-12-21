import './filterPanel.scss'
import { useState } from 'react'
import { IProduct } from '../../types'

interface IFilterPanelProps {
  products: IProduct[]
  onFiltered: (products: IProduct[]) => void
}

export const FilterPanel = ({ products, onFiltered }: IFilterPanelProps) => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [wathFlagFilter, setWatchFlagFilter] = useState(false)
  const watchCat = products.filter(
    (product) => product.category === 'часы',
  ).length
  const [watchFilter, setWatchFilter] = useState(watchCat)
  const decorCat = products.filter(
    (product) => product.category === 'праздничный декор',
  ).length
  const [decorFilter, setDecorFilter] = useState(decorCat)
  function clickCheckboxHandler() {
    setWatchFlagFilter(!wathFlagFilter)
    wathFlagFilter
      ? setFilteredProducts((prev) => {
          return prev.filter((product) => product.category === 'часы')
        })
      : setFilteredProducts(products)
    onFiltered(filteredProducts)
  }
  return (
    <section className="filter">
      <div className="filter__buttons">
        <button className="filter__reset">Сбросить фильтры</button>
        <button className="filter__copy">Скопировать ссылку</button>
      </div>
      <ul className="filter__list list">
        <p className="list__title">Категория</p>
        <li className="list__item">
          <input
            onClick={clickCheckboxHandler}
            className="list__checkbox"
            type="checkbox"
            id="first-input"
          ></input>
          <label className="list__label" htmlFor="first-input">
            Часы
          </label>
          <label className="list__results">
            {`(${watchFilter}/${watchCat})`}
          </label>
        </li>
        <li className="list__item">
          <input
            className="list__checkbox"
            type="checkbox"
            id="first-input"
          ></input>
          <label className="list__label" htmlFor="first-input">
            Праздничный декор
          </label>
          <label className="list__results results">
            {`(`}
            <span className="results__available">{decorFilter}</span>
            {`/`}
            <span className="results__all">{decorFilter}</span>
            {`)`}
          </label>
        </li>
      </ul>
    </section>
  )
}

import './filterPanel.scss'
import { IProduct } from '../../types'
import { CategoryItem } from '../categoryItem/categoryItem'

interface IFilterPanelProps {
  products: IProduct[]
  onFiltered: (products: IProduct[]) => void
}

export const FilterPanel = ({ products, onFiltered }: IFilterPanelProps) => {
  return (
    <section className="filter">
      <div className="filter__buttons">
        <button className="filter__reset">Сбросить фильтры</button>
        <button className="filter__copy">Скопировать ссылку</button>
      </div>
      <ul className="filter__list list">
        <p className="list__title">Категория</p>
        <CategoryItem
          category="часы"
          onChange={onFiltered}
          products={products}
        />
      </ul>
    </section>
  )
}

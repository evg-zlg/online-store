import './filterPanel.scss'
import { IProduct } from '../../types'
import { CategoryItem } from '../categoryItem/categoryItem'

interface IFilterPanelProps {
  products: IProduct[]
  filteredProducts: IProduct[]
  // onFiltered: (products: IProduct[]) => void
}

export const FilterPanel = ({
  products,
  filteredProducts,
}: IFilterPanelProps) => {
  function getCategories() {
    const categories: string[] = []
    products.forEach((product) => {
      if (!categories.join('').includes(product.category)) {
        categories.push(product.category)
      }
    })
    return categories
  }

  return (
    <section className="filter">
      <div className="filter__buttons">
        <button className="filter__reset">Сбросить фильтры</button>
        <button className="filter__copy">Скопировать ссылку</button>
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
    </section>
  )
}

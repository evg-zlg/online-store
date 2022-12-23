import './filterPanel.scss'
import { IProduct } from '../../types'
import { CategoryItem } from '../categoryItem/categoryItem'
import { useSearchParams } from 'react-router-dom'

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
    })
    setSearchParams(url.searchParams)
  }

  return (
    <section className="filter">
      <div className="filter__buttons">
        <button onClick={resetHandler} className="filter__reset">
          Сбросить фильтры
        </button>
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

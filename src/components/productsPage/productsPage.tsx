import './productsPage.scss'
import { ProductCard } from '../productCard/productCard'
import { ProductViewControl } from '../productViewControl/productViewControl'
import { FilterPanel } from '../filterPanel/filterPanel'
import { IProduct } from '../../types'
import { useSearchParams } from 'react-router-dom'
import { getCategories, getTags, getFilteredProduct } from '../utility/utility'

interface IProductsPageProps {
  numHandler: (num: number) => void
}

export default function ProductsPage({ numHandler }: IProductsPageProps) {
  const [searchParams] = useSearchParams()
  const categories = getCategories()
  const tags = getTags()
  let classes = ''
  searchParams.get('view') === 'list'
    ? (classes = 'products-page__products products-page__products--list')
    : (classes = 'products-page__products')
  const filteredProducts = getFilteredProduct(searchParams)
  return (
    <section className="products-page">
      <aside className="products-page__filter">
        <FilterPanel
          filteredProducts={filteredProducts}
          categories={categories}
          tags={tags}
        />
      </aside>
      <div className="products-page__content">
        <ProductViewControl
          countFilteredProducts={filteredProducts.length}
          className={'products-page__view-control view-control'}
        />
        <div className={classes}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: IProduct) => {
              return (
                <ProductCard
                  key={product.id}
                  numHandler={numHandler}
                  product={product}
                />
              )
            })
          ) : (
            <p className="products-page__empty">
              Товаров не найдено, попробуйте изменить настройки фильтрации
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

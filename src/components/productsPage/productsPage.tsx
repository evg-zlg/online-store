import './productsPage.scss'
import { ProductCard } from '../productCard/productCard'
import { ProductViewControl } from '../productViewControl/productViewControl'
import { FilterPanel } from '../filterPanel/filterPanel'
import { IProduct } from '../../types'
import { useSearchParams } from 'react-router-dom'
import { getCategories, getTags, getFilteredProduct } from '../utility/utility'
import { useEffect } from 'react'

interface IProductsPageProps {
  numHandler: (num: number) => void
  changeBannerIndex: () => void
  bannerIndex: number
}

export default function ProductsPage({
  numHandler,
  changeBannerIndex,
  bannerIndex,
}: IProductsPageProps) {
  const [searchParams] = useSearchParams()
  const categories = getCategories()
  const tags = getTags()
  let classes = ''
  searchParams.get('view') === 'list'
    ? (classes = 'products-page__products products-page__products--list')
    : (classes = 'products-page__products')
  const filteredProducts = getFilteredProduct(searchParams)
  useEffect(() => {
    changeBannerIndex()
  }, [])
  return (
    <section className="products-page">
      <aside className="products-page__filter">
        <FilterPanel
          filteredProducts={filteredProducts}
          categories={categories}
          tags={tags}
        />
        {bannerIndex === 0 && (
          <a
            className="products-page__banner products-page__banner--taplink"
            href="https://taplink.cc/sekreta_ecodecor"
            target="_blank"
            rel="noreferrer"
          >
            Узнать больше
          </a>
        )}
        {bannerIndex === 1 && (
          <a
            className="products-page__banner products-page__banner--vk"
            href="https://vk.com/sekreta_ecodecor"
            target="_blank"
            rel="noreferrer"
          >
            Заглянуть в VK
          </a>
        )}
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

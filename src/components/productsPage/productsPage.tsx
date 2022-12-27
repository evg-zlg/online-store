import './productsPage.scss'
import { products } from '../../data/data'
import { ProductCard } from '../productCard/productCard'
import { ProductViewControl } from '../productViewControl/productViewControl'
import { useState } from 'react'
import { FilterPanel } from '../filterPanel/filterPanel'
import { IProduct } from '../../types'
import { useSearchParams } from 'react-router-dom'

interface IProductsPageProps {
  numHandler: (num: number) => void
}

export default function ProductsPage({ numHandler }: IProductsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  let classes = ''
  searchParams.get('view') === 'list'
    ? (classes = 'products-page__products products-page__products--list')
    : (classes = 'products-page__products')
  function getFilteredProduct() {
    const filteredProducts: IProduct[] = []
    //include in filtered
    if (searchParams.has('decor')) {
      filteredProducts.push(
        ...products.filter(
          (product) => product.categoryID === searchParams.get('decor'),
        ),
      )
    }
    if (searchParams.has('watch')) {
      filteredProducts.push(
        ...products.filter(
          (product) => product.categoryID === searchParams.get('watch'),
        ),
      )
    }
    if (searchParams.has('baskets')) {
      filteredProducts.push(
        ...products.filter(
          (product) => product.categoryID === searchParams.get('baskets'),
        ),
      )
    }
    if (searchParams.has('kitchen')) {
      filteredProducts.push(
        ...products.filter(
          (product) => product.categoryID === searchParams.get('kitchen'),
        ),
      )
    }
    if (searchParams.has('children')) {
      filteredProducts.push(
        ...products.filter(
          (product) => product.categoryID === searchParams.get('children'),
        ),
      )
    }
    if (filteredProducts.length === 0) {
      filteredProducts.push(...products)
    }
    //exclude in filtered
    let newFilteredProducts: IProduct[] = [...filteredProducts]
    if (searchParams.has('search')) {
      const search = searchParams.get('search') || ''
      newFilteredProducts = filteredProducts.filter((product) => {
        const result =
          product.description
            .join(' ')
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          product.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          String(product.count)
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          String(product.price)
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        return result
      })
    }
    if (searchParams.has('minprice')) {
      const minPrice = parseInt(searchParams.get('minprice') || '')
      newFilteredProducts = newFilteredProducts.filter((product) => {
        return product.price >= minPrice
      })
    }
    if (searchParams.has('maxprice')) {
      const maxPrice = parseInt(searchParams.get('maxprice') || '')
      newFilteredProducts = newFilteredProducts.filter((product) => {
        return product.price <= maxPrice
      })
    }
    if (searchParams.has('maxstock')) {
      const maxStock = parseInt(searchParams.get('maxstock') || '')
      newFilteredProducts = newFilteredProducts.filter((product) => {
        return product.count <= maxStock
      })
    }
    if (searchParams.has('minstock')) {
      const minStock = parseInt(searchParams.get('minstock') || '')
      newFilteredProducts = newFilteredProducts.filter((product) => {
        return product.count >= minStock
      })
    }
    return newFilteredProducts
  }
  const filteredProducts = getFilteredProduct()
  return (
    <section className="products-page">
      <aside className="products-page__filter">
        <FilterPanel
          //sdf
          products={products}
          filteredProducts={filteredProducts}
        />
      </aside>
      <div className="products-page__content">
        <ProductViewControl
          countFilteredProducts={filteredProducts.length}
          className={'products-page__view-control view-control'}
        />
        <div className={classes}>
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                numHandler={numHandler}
                product={product}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

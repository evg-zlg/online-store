import './productsPage.scss'
import { products } from '../../data/data'
import { ProductCard } from '../productCard/productCard'
import { ProductViewControl } from '../productViewControl/productViewControl'
import { FilterPanel } from '../filterPanel/filterPanel'
import { IProduct } from '../../types'
import { useSearchParams } from 'react-router-dom'

interface IProductsPageProps {
  numHandler: (num: number) => void
}

export default function ProductsPage({ numHandler }: IProductsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const categories = getCategories()
  const tags = getTags()
  let classes = ''
  searchParams.get('view') === 'list'
    ? (classes = 'products-page__products products-page__products--list')
    : (classes = 'products-page__products')
  function getCategories() {
    const categories: string[] = []
    products.forEach((product) => {
      if (!categories.join('').includes(product.category)) {
        categories.push(product.category)
      }
    })
    return categories
  }
  function getTags() {
    const tags: string[] = []
    products.forEach((product) => {
      product.tags.forEach((tag) => {
        if (!tags.join(' ').includes(tag)) {
          tags.push(tag)
        }
      })
    })
    return tags
  }
  function getElementNameByIndex(i: number, type: string) {
    let result: string = ''
    type === 'categories' ? (result = categories[i]) : (result = tags[i])
    return result
  }
  function deduplicateArray(arr: IProduct[]): IProduct[] {
    let set = new Set()
    let result: IProduct[] = []
    arr.forEach((el) => {
      if (!set.has(el.id)) {
        set.add(el.id)
        result.push(el)
      }
    })
    return result
  }
  function getFilteredProduct() {
    let filteredProducts: IProduct[] = []
    //include in filtered
    if (searchParams.has('categories') && searchParams.has('tags')) {
      let catParams = searchParams.get('categories')?.split('.') || []
      let tagParams = searchParams.get('tags')?.split('.') || []
      if (catParams.length > 0) {
        catParams.forEach((param) => {
          filteredProducts.push(
            ...products.filter((product) => {
              let haveTag = false
              tagParams.forEach((tagParam) => {
                if (
                  product.tags
                    .join(' ')
                    .includes(getElementNameByIndex(parseInt(tagParam), 'tags'))
                ) {
                  haveTag = true
                }
              })
              return (
                product.category ===
                  getElementNameByIndex(parseInt(param), 'categories') &&
                haveTag
              )
            }),
          )
        })
      }
    } else if (searchParams.has('categories')) {
      let params = searchParams.get('categories')?.split('.') || []
      if (params.length > 0) {
        params.forEach((param) => {
          filteredProducts.push(
            ...products.filter((product) => {
              return (
                product.category ===
                getElementNameByIndex(parseInt(param), 'categories')
              )
            }),
          )
        })
      }
    } else if (searchParams.has('tags')) {
      let params = searchParams.get('tags')?.split('.') || []
      if (params.length > 0) {
        params.forEach((param) => {
          filteredProducts.push(
            ...products.filter((product) => {
              return product.tags
                .join(' ')
                .includes(getElementNameByIndex(parseInt(param), 'tags'))
            }),
          )
        })
      }
    }
    if (filteredProducts.length > 0) {
      filteredProducts = deduplicateArray(filteredProducts)
    } else {
      //if no filters
      if (!(searchParams.has('categories') && searchParams.has('tags'))) {
        filteredProducts.push(...products)
      }
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
    //sort
    switch (searchParams.get('sort')) {
      case 'price-ask':
        newFilteredProducts = [...newFilteredProducts].sort(
          (a, b) => a.price - b.price,
        )
        break
      case 'price-desk':
        newFilteredProducts = [...newFilteredProducts].sort(
          (a, b) => b.price - a.price,
        )
        break
      case 'stock-ask':
        newFilteredProducts = [...newFilteredProducts].sort(
          (a, b) => a.count - b.count,
        )
        break
      case 'stock-desk':
        newFilteredProducts = [...newFilteredProducts].sort(
          (a, b) => b.count - a.count,
        )
        break

      default:
        break
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
            filteredProducts.map((product) => {
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

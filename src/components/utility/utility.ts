import { IProduct } from '../../types'
import { products } from '../../data/data'

const deleteParam = (param: string, str: string) => {
  const params = str.split('.')
  return params.filter((el) => el !== param).join('.')
}
const getMaxPriceFilteredProducts = (filteredProducts: IProduct[]) => {
  if (filteredProducts.length === 0) {
    return getMaxPrice()
  }
  const newProducts = []
  newProducts.push(...filteredProducts)
  return newProducts.sort((a, b) => a.price - b.price)[newProducts.length - 1]
    .price
}
const getMinPriceFilteredProducts = (filteredProducts: IProduct[]) => {
  if (filteredProducts.length === 0) {
    return getMinPrice()
  }
  const newProducts = []
  newProducts.push(...filteredProducts)
  return newProducts.sort((a, b) => a.price - b.price)[0].price
}
const getMaxPrice = () => {
  const newProducts = []
  newProducts.push(...products)
  return newProducts.sort((a, b) => a.price - b.price)[newProducts.length - 1]
    .price
}
const getMinPrice = () => {
  const newProducts = []
  newProducts.push(...products)
  return newProducts.sort((a, b) => a.price - b.price)[0].price
}
const getMaxStock = () => {
  const newProducts = []
  newProducts.push(...products)
  return newProducts.sort((a, b) => a.count - b.count)[newProducts.length - 1]
    .count
}
const getMinStock = () => {
  const newProducts = []
  newProducts.push(...products)
  return newProducts.sort((a, b) => a.count - b.count)[0].count
}
const getMaxStockFilteredProducts = (filteredProducts: IProduct[]) => {
  if (filteredProducts.length === 0) {
    return getMaxStock()
  }
  const newProducts = []
  newProducts.push(...filteredProducts)
  return newProducts.sort((a, b) => a.count - b.count)[newProducts.length - 1]
    .count
}
const getMinStockFilteredProducts = (filteredProducts: IProduct[]) => {
  if (filteredProducts.length === 0) {
    return getMinPrice()
  }
  const newProducts = []
  newProducts.push(...filteredProducts)
  return newProducts.sort((a, b) => a.count - b.count)[0].count
}
const getCategories = () => {
  const categories: string[] = []
  products.forEach((product) => {
    if (!categories.join('').includes(product.category)) {
      categories.push(product.category)
    }
  })
  return categories
}
const getTags = () => {
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
const getElementNameByIndex = (i: number, type: string) => {
  let result: string = ''
  type === 'categories'
    ? (result = getCategories()[i])
    : (result = getTags()[i])
  return result
}
const deduplicateArray = (arr: IProduct[]): IProduct[] => {
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
const getFilteredProduct = (searchParams: URLSearchParams) => {
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
                getElementNameByIndex(parseInt(param), 'categories') && haveTag
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
        product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
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
const changeBannerIndex = (currentIndex: number) => {
  console.log('actual number:', currentIndex)
  return currentIndex === 0 ? 1 : 0
}
export {
  deleteParam,
  getMaxPriceFilteredProducts,
  getMinPriceFilteredProducts,
  getMaxPrice,
  getMinPrice,
  getMaxStock,
  getMinStock,
  getMaxStockFilteredProducts,
  getMinStockFilteredProducts,
  getCategories,
  getTags,
  getElementNameByIndex,
  deduplicateArray,
  getFilteredProduct,
  changeBannerIndex,
}

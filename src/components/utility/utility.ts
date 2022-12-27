import { products } from '../../data/data'

const getMinPrice = () => {
  const newProducts = []
  newProducts.push(...products)
  return newProducts.sort((a, b) => a.price - b.price)[0].price
}
const getMaxPrice = () => {
  const newProducts = []
  newProducts.push(...products)
  return newProducts.sort((a, b) => a.price - b.price)[newProducts.length - 1]
    .price
}

export { getMinPrice, getMaxPrice }

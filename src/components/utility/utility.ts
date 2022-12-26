import { products } from '../../data/data'

const getMinPrice = () => {
  return products.sort((a, b) => a.price - b.price)[0].price
}
const getMaxPrice = () => {
  return products.sort((a, b) => a.price - b.price)[products.length - 1].price
}

export { getMinPrice, getMaxPrice }

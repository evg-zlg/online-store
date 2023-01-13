import { deleteParam, getMaxPrice, getMinPrice } from './utility'
import { IProduct } from '../../types'

//deleteParam function for change query params

test('delete "3" from "0.3.4"', () => {
  expect(deleteParam('3', '0.3.4')).toEqual('0.4')
})

test('delete "0" from "0"', () => {
  expect(deleteParam('0', '0')).toEqual('')
})

test('delete "0" from "1.2"', () => {
  expect(deleteParam('0', '1.2')).toEqual('1.2')
})

//getMaxPrice from produtcs array

const produtcsArray1: IProduct[] = [
  {
    id: 1,
    name: ``,
    category: '',
    categoryID: '',
    description: [``],
    price: 100,
    images: [''],
    count: 4,
    tags: ['', '', ' '],
  },
  {
    id: 2,
    name: ``,
    category: '',
    categoryID: '',
    description: [``],
    price: 200,
    images: [''],
    count: 4,
    tags: ['', '', ' '],
  },
  {
    id: 3,
    name: ``,
    category: '',
    categoryID: '',
    description: [``],
    price: 300,
    images: [''],
    count: 4,
    tags: ['', '', ' '],
  },
]
const produtcsArray2: IProduct[] = [
  {
    id: 1,
    name: ``,
    category: '',
    categoryID: '',
    description: [``],
    price: 100,
    images: [''],
    count: 4,
    tags: ['', '', ' '],
  },
  {
    id: 2,
    name: ``,
    category: '',
    categoryID: '',
    description: [``],
    price: 100,
    images: [''],
    count: 4,
    tags: ['', '', ' '],
  },
  {
    id: 3,
    name: ``,
    category: '',
    categoryID: '',
    description: [``],
    price: 100,
    images: [''],
    count: 4,
    tags: ['', '', ' '],
  },
]
const productsArrayEmpty: IProduct[] = []
test('find max price in the produtcsArray1', () => {
  expect(getMaxPrice(produtcsArray1)).toEqual(300)
})
test('find max price in the produtcsArray2', () => {
  expect(getMaxPrice(produtcsArray2)).toEqual(100)
})
test('find max price in the productsArrayEmpty', () => {
  expect(getMaxPrice(productsArrayEmpty)).toEqual(0)
})

//getMinPrice from produtcs array
test('find min price in the produtcsArray1', () => {
  expect(getMinPrice(produtcsArray1)).toEqual(100)
})
test('find min price in the produtcsArray2', () => {
  expect(getMinPrice(produtcsArray2)).toEqual(100)
})
test('find min price in the productsArrayEmpty', () => {
  expect(getMinPrice(productsArrayEmpty)).toEqual(0)
})

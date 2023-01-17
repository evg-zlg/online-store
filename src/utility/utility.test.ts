import {
  deleteParam,
  getMaxPrice,
  getMinPrice,
  getElementNameByIndex,
  deduplicateArray,
  changeBannerIndex,
} from './utility';
import { IProduct } from '../types';

// ===========================================

test('delete "3" from "0.3.4"', () => {
  expect(deleteParam('3', '0.3.4')).toEqual('0.4');
});

test('delete "0" from "0"', () => {
  expect(deleteParam('0', '0')).toEqual('');
});

test('delete "0" from "1.2"', () => {
  expect(deleteParam('0', '1.2')).toEqual('1.2');
});

// ===========================================

test('get tag 1 from tags', () => {
  expect(getElementNameByIndex(1, 'tags')).toEqual('идея подарка');
});
test('get category 0 from categoryes', () => {
  expect(getElementNameByIndex(0, 'categories')).toEqual('часы');
});
test('get not exist category', () => {
  expect(getElementNameByIndex(-1, 'categories')).toBeFalsy();
});
test('get not exist tag', () => {
  expect(getElementNameByIndex(-1, 'tags')).toBeFalsy();
});

// ===========================================

test('change banner index from 0 to 1', () => {
  expect(changeBannerIndex(0)).toEqual(1);
});
test('change banner index from 1 to 0', () => {
  expect(changeBannerIndex(1)).toEqual(0);
});

// ===========================================

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
];
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
    tags: ['1', '2', '2', '3'],
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
];
const productsArrayEmpty: IProduct[] = [];

test('deduplicated list of products', () => {
  const duplicatedArray: IProduct[] = [];
  duplicatedArray.push(...produtcsArray1, ...produtcsArray1);

  const checkDuplicate = (arr: IProduct[]) => {
    let set = new Set();
    let result = true;
    arr.forEach((el) => {
      if (set.has(el.id)) {        
        result = false;
      } else {
        set.add(el.id);
      }
    });
    return result;
  };

  expect(checkDuplicate(deduplicateArray(duplicatedArray))).toEqual(true);
});
test('find max price in the produtcsArray1', () => {
  expect(getMaxPrice(produtcsArray1)).toEqual(300);
});
test('find max price in the produtcsArray2', () => {
  expect(getMaxPrice(produtcsArray2)).toEqual(100);
});
test('find max price in the productsArrayEmpty', () => {
  expect(getMaxPrice(productsArrayEmpty)).toEqual(0);
});

//getMinPrice from produtcs array
test('find min price in the produtcsArray1', () => {
  expect(getMinPrice(produtcsArray1)).toEqual(100);
});
test('find min price in the produtcsArray2', () => {
  expect(getMinPrice(produtcsArray2)).toEqual(100);
});
test('find min price in the productsArrayEmpty', () => {
  expect(getMinPrice(productsArrayEmpty)).toEqual(0);
});

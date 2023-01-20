import { IProduct } from '../types';
import { products } from './data';

test('all products values valid', () => {
  const testAllValues = (product: IProduct) => {
    return (
      product.category.length > 0 &&
      product.count > -1 &&
      product.description.length > 0 &&
      product.id > -1 &&
      product.images.length > 0 &&
      product.name.length > 0 &&
      product.price > -1 &&
      product.tags.length > 0
    );
  };
  products.forEach((product) => {
    expect(testAllValues(product)).toBeTruthy();
  });
});

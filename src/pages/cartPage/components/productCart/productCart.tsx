import './productCart.scss';
import { products } from '../../../../data/data';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from '../../../../components/UI/carousel/carousel';

interface ProductCartProps {
  cartId: number;
  cardInd: number;
  storageCallback: (storage: Record<string, number>) => void;
  deleteItemCallback: (id: number) => void;
}

export function ProductCart({
  cartId,
  cardInd,
  storageCallback,
  deleteItemCallback,
}: ProductCartProps) {
  const cartLocal = JSON.parse(localStorage.getItem('object') || '{}');
  const [count, setCount] = useState(cartLocal[cartId]);

  const handleDecrement = () => {
    if (count > 0) {
      if (count === 1) {
        deleteItemCallback(cartId);
        const cartLocal = JSON.parse(localStorage.getItem('object') || '{}');
        delete cartLocal[cartId];
        localStorage.setItem('object', JSON.stringify(cartLocal));
        storageCallback(cartLocal);
      }
      setCount(() => count - 1);
    }
  };
  const handleIncrement = () => {
    if (count < products[cartId - 1].count) {
      setCount(() => count + 1);
    }
  };

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem('object') || '{}');
    cartLocal[cartId] = count;
    localStorage.setItem('object', JSON.stringify(cartLocal));
    storageCallback(cartLocal);
  }, [count, storageCallback, cartId]);

  return (
    <>
      <div className="cart-products__item item">
        <div className="item__num">{cardInd + 1}</div>
        <Carousel
          className={'item__img'}
          alt={products[cartId - 1].name}
          images={products[cartId - 1].images}
          currentImage={products[cartId - 1].images[0]}
        />
        <NavLink className="item__link" to={'/item/' + cartId}>
          <div className="item__name">{products[cartId - 1].name}</div>
        </NavLink>
        <div className="item__category">{products[cartId - 1].category}</div>
        <div className="item__count">{products[cartId - 1].count}</div>
        <div className="item__price">{products[cartId - 1].price} руб.</div>
        <div className="item__input-group input-group">
          <button className="input-group__btn" onClick={handleDecrement}>
            -
          </button>
          <div className="input-group__text">{count}</div>
          <button
            className={
              count === products[cartId - 1].count
                ? 'input-group__btn-plus input-group__btn-plus--disabled'
                : 'input-group__btn-plus'
            }
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className="item__sum">
          {products[cartId - 1].price * count} руб.
        </div>
      </div>
    </>
  );
}

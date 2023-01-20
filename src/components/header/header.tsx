import './header.scss';
import { NavLink } from 'react-router-dom';
import { products } from '../../data/data';
import { useState, useEffect } from 'react';
import { FC } from 'react';

export const Header: FC = () => {
  const localArr = JSON.parse(localStorage.getItem('object') || '{}');
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let priceHandler = 0;
    let countHandler = 0;
    for (const product of products) {
      if (Object.keys(localArr).includes(product.id.toString())) {
        priceHandler += product.price * localArr[product.id];
        countHandler += localArr[product.id];
      }
    }
    setPrice(priceHandler);
    setCount(countHandler);
  }, [localArr]);

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <div className="header__logo"></div>
        </NavLink>
        <div className="header__basket basket">
          <div
            className={
              count === 0
                ? 'basket__price'
                : 'basket__price basket__price--active'
            }
          >
            Сумма:
            <span className="total__price">{price}</span>
          </div>
          <NavLink to={'/cart'}>
            <div
              className={
                count === 0
                  ? 'basket__count'
                  : 'basket__count basket__count--active'
              }
            >
              {count}
            </div>
            <div className="basket__img"></div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

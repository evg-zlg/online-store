import './categoryItem.scss';
import { IProduct } from '../../types';
import { useSearchParams } from 'react-router-dom';
import { products } from '../../data/data';
import { deleteParam } from '../utility/utility';
import { useState, useEffect } from 'react';

interface ICategoryItemProps {
  item: string;
  productCurrent: IProduct[];
  type: string;
  index?: number;
}

export const CategoryItem = ({
  item,
  productCurrent,
  type,
  index,
}: ICategoryItemProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [checked, setChecked] = useState(
    searchParams.get(type)?.includes(String(index)) || false,
  );
  const [productCurrentCount, setProductCurrentCount] = useState(0);
  const [productTotalCount, setProductTotalCount] = useState(0);
  useEffect(() => {
    setProductCurrentCount(() => {
      return type === 'categories'
        ? productCurrent.filter(
            (productCurrent) => productCurrent.category === item,
          ).length
        : productCurrent.filter((productCurrent) =>
            productCurrent.tags.join(' ').includes(item),
          ).length;
    });
  }, [item, type, productCurrent]);
  useEffect(() => {
    setProductTotalCount(() => {
      return type === 'categories'
        ? products.filter((product) => product.category === item).length
        : products.filter((product) => product.tags.join(' ').includes(item))
            .length;
    });
  }, [item, type]);
  function clickCheckboxHandler() {
    const url = new URL(window.location.href);
    if (searchParams.has(type)) {
      let params = url.searchParams.get(type);
      params?.includes(String(index))
        ? (params = deleteParam(String(index), params))
        : (params += `.${index}`);
      params
        ? url.searchParams.set(type, params)
        : url.searchParams.delete(type);
    } else {
      url.searchParams.append(type, String(index));
    }
    setSearchParams(url.searchParams);
  }
  return (
    <li className="list__item">
      <label className="list__label" htmlFor={type + index}>
        <input
          onClick={clickCheckboxHandler}
          className="list__checkbox"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
          type="checkbox"
          id={type + index}
        ></input>
        {item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()}
      </label>
      <label className="list__results">{`(${productCurrentCount}/${productTotalCount})`}</label>
    </li>
  );
};

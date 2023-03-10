import './productViewControl.scss';
import { useSearchParams } from 'react-router-dom';
import React, { FC, useState } from 'react';

interface IProductViewControlProps {
  className: string;
  countFilteredProducts: number;
}

export const ProductViewControl: FC<IProductViewControlProps> = ({
  className,
  countFilteredProducts,
}: IProductViewControlProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [select, setSelect] = useState(searchParams.get('sort') || 'none');
  const url = new URL(window.location.href);
  const [classesListBtn, setClassesListBtn] = useState(() => {
    return searchParams.get('view') === 'list'
      ? 'view-control__list-btn view-control__list-btn--active'
      : 'view-control__list-btn';
  });
  const [classesGridBtn, setClassesGridBtn] = useState(() => {
    if (!searchParams.has('view') || searchParams.get('view') === 'grid') {
      return 'view-control__grid-btn view-control__grid-btn--active';
    } else {
      return 'view-control__grid-btn';
    }
  });

  function listBtnClickHandler() {
    if (searchParams.get('view') !== 'list') {
      url.searchParams.set('view', 'list');
    }
    setSearchParams(url.searchParams);
    setClassesListBtn('view-control__list-btn view-control__list-btn--active');
    setClassesGridBtn('view-control__grid-btn');
  }
  function gridBtnClickHandler() {
    if (searchParams.get('view') !== 'grid') {
      url.searchParams.set('view', 'grid');
    }
    setSearchParams(url.searchParams);
    setClassesGridBtn('view-control__grid-btn view-control__grid-btn--active');
    setClassesListBtn('view-control__list-btn');
  }
  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const str = e.target.value;
    const url = new URL(window.location.href);
    str
      ? url.searchParams.set('search', str)
      : url.searchParams.delete('search');
    setSearchParams(url.searchParams);
    return str;
  }
  function selectHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const url = new URL(window.location.href);
    const value = e.target.value;
    setSelect(value);
    value === 'none'
      ? url.searchParams.delete('sort')
      : url.searchParams.set('sort', value);
    setSearchParams(url.searchParams);
  }
  return (
    <div className={className}>
      <select
        className="view-control__select"
        value={select}
        onChange={selectHandler}
      >
        <option value="none">?????????????????????? ???? ??????????????????</option>
        <option value="price-ask">???? ?????????????????????? ????????</option>
        <option value="price-desk">???? ???????????????? ????????</option>
        <option value="stock-ask">???? ?????????????????????? ??????????????</option>
        <option value="stock-desk">???? ???????????????? ??????????????</option>
      </select>
      <input
        className="view-control__search"
        placeholder="??????????..."
        type="search"
        value={searchParams.get('search') || ''}
        onChange={searchHandler}
      ></input>
      <p className="view-control__found">
        {`?????????????? ??????????????: `}
        <span className="view-control__count">{countFilteredProducts}</span>
      </p>
      <div className="view-control__views">
        <button
          onClick={listBtnClickHandler}
          className={classesListBtn}
        ></button>
        <button
          onClick={gridBtnClickHandler}
          className={classesGridBtn}
        ></button>
      </div>
    </div>
  );
};

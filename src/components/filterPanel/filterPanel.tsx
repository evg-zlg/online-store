import './filterPanel.scss';
import { IProduct } from '../../types';
import { CategoryItem } from '../categoryItem/categoryItem';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { DualSlider } from '../../UI/dualSlider/dualSlider';
import { products } from '../../data/data';
import {
  getMaxPriceFilteredProducts,
  getMinPriceFilteredProducts,
  getMaxPrice,
  getMinPrice,
  getMaxStock,
  getMinStock,
  getMaxStockFilteredProducts,
  getMinStockFilteredProducts,
} from '../../utility/utility';

interface IFilterPanelProps {
  filteredProducts: IProduct[];
  categories: string[];
  tags: string[];
}

export const FilterPanel: React.FC<IFilterPanelProps> = ({
  filteredProducts,
  categories,
  tags,
}: IFilterPanelProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [copyText, setCopyText] = useState('Копировать ссылку');
  const [copyClass, setCopyClass] = useState('filter__copy');
  const resetHandler = () => {
    if (searchParams) {
    }
    const url = new URL(window.location.href);
    url.searchParams.delete('categories');
    url.searchParams.delete('tags');
    url.searchParams.delete('search');
    url.searchParams.delete('maxprice');
    url.searchParams.delete('minprice');
    url.searchParams.delete('minstock');
    url.searchParams.delete('maxstock');
    setSearchParams(url.searchParams);
  };
  const copyHandler = () => {
    const url = new URL(window.location.href);
    navigator.clipboard.writeText(url.href);
    setCopyText('Ссылка скопированна');
    setCopyClass('filter__copy filter__copy--copied');
    setTimeout(() => {
      setCopyClass('filter__copy');
      setCopyText('Скопировать ссылку');
    }, 1500);
  };
  return (
    <section className="filter">
      <div className="filter__buttons">
        <button onClick={resetHandler} className="filter__reset">
          Сбросить фильтры
        </button>
        <button onClick={copyHandler} className={copyClass}>
          {copyText}
        </button>
      </div>
      <div className="filter__list list">
        <h2 className="filter__title">Категория</h2>
        {categories.map((cat, index) => {
          return (
            <CategoryItem
              type="categories"
              key={cat}
              item={cat}
              index={index}
              productCurrent={filteredProducts}
            />
          );
        })}
      </div>
      <div className="filter__tags tags">
        <h2 className="filter__title">Подборки</h2>
        <div className="tags__items">
          {tags.map((tag, index) => {
            return (
              <CategoryItem
                type="tags"
                key={tag}
                item={tag}
                index={index}
                productCurrent={filteredProducts}
              />
            );
          })}
        </div>
      </div>
      <DualSlider
        className="filter__price"
        type="price"
        title="Цена"
        maxValue={getMaxPrice(products)}
        minValue={getMinPrice(products)}
        leftValue={String(getMinPriceFilteredProducts(filteredProducts))}
        rightValue={String(getMaxPriceFilteredProducts(filteredProducts))}
        step={10}
        currency={'руб.'}
      />
      <DualSlider
        className="filter__stock"
        type="stock"
        title="В наличии"
        maxValue={getMaxStock()}
        minValue={getMinStock()}
        leftValue={String(getMinStockFilteredProducts(filteredProducts))}
        rightValue={String(getMaxStockFilteredProducts(filteredProducts))}
        step={1}
        currency={''}
      />
    </section>
  );
};

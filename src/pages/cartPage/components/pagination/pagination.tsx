import './pagination.scss';
import { ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface IPagination {
  setValue: (n: number) => void;
  setPage: (n: number) => void;
  prevPage: () => void;
  nextPage: () => void;
  page: number;
  totalPages: number;
  value: number;
}

export default function Pagination({
  setValue,
  setPage,
  prevPage,
  nextPage,
  page,
  totalPages,
  value,
}: IPagination) {
  const [, setPageParams] = useSearchParams();
  const inputCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +(e.target as HTMLInputElement).value;
    if (newValue > 0) {
      setValue(newValue);
      setPage(1);
      const url = new URL(window.location.href);
      url.searchParams.set('items', newValue.toString());
      url.searchParams.set('page', '1');
      setPageParams(url.searchParams);
    }
  };

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const currentItems = +(searchParams.get('items') || 3);
    if (currentItems) setValue(currentItems);
  }, [setValue, searchParams]);

  if (totalPages < page) {
    const url = new URL(window.location.href);
    url.searchParams.set('page', totalPages.toString());
    setPageParams(url.searchParams);
  }
  return (
    <div className="cart-page__pagination pagination">
      <p className="pagination__text">
        Страница {page} из {totalPages}
      </p>
      <button onClick={prevPage} className="pagination__btn">
        {'<'}
      </button>
      <input
        className="pagination__input"
        type="number"
        value={value}
        onChange={inputCallback}
        min={1}
      />
      <button onClick={nextPage} className="pagination__btn">
        {'>'}
      </button>
    </div>
  );
}

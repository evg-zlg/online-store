import './pagination.scss'
import { ChangeEvent } from 'react'

interface Ipagination {
  setValue: (n: number) => void
  setPage: (n: number) => void
  prevPage: () => void
  nextPage: () => void
  page: number
  totalPages: number
  value: number
}

export default function Pagination({
  setValue,
  setPage,
  prevPage,
  nextPage,
  page,
  totalPages,
  value,
}: Ipagination) {
  const inputCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +(e.target as HTMLInputElement).value
    if (newValue > 0) {
      localStorage.setItem('countItems', newValue.toString())
      setValue(newValue)
      setPage(1)
    }
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
  )
}

import './pagination.scss'
import { ChangeEvent, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

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

  const [, setPageParams] = useSearchParams()

  useEffect(() => {
    localStorage.setItem('currentPage', JSON.stringify(page))
    const url = new URL(window.location.href)
    url.searchParams.set('page', page.toString())
    setPageParams(url.searchParams)
  }, [page, setPageParams])

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

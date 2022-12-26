import './productViewControl.scss'
import { useSearchParams } from 'react-router-dom'

interface IProductViewControlProps {
  className: string
  countFilteredProducts: number
}

export const ProductViewControl = ({
  className,
  countFilteredProducts,
}: IProductViewControlProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const url = new URL(window.location.href)

  function listBtnClickHandler() {
    if (searchParams.get('view') !== 'list') {
      url.searchParams.set('view', 'list')
    }
    setSearchParams(url.searchParams)
  }
  function gridBtnClickHandler() {
    if (searchParams.get('view') !== 'grid') {
      url.searchParams.set('view', 'grid')
    }
    setSearchParams(url.searchParams)
  }
  return (
    <div className={className}>
      <select defaultValue={1} className="view-control__select">
        <option value="1">Сортировать по умолчанию</option>
        <option value="2">По цене: ↓</option>
        <option value="3">По цене: ↑</option>
        <option value="4">По наличию: ↓</option>
        <option value="5">По наличию: ↑</option>
      </select>
      <p className="view-control__found">
        {`Найдено товаров: `}
        <span className="view-control__count">{countFilteredProducts}</span>
      </p>
      <div className="view-control__views">
        <button
          onClick={listBtnClickHandler}
          className="view-control__list-btn"
        ></button>
        <button
          onClick={gridBtnClickHandler}
          className="view-control__grid-btn"
        ></button>
      </div>
    </div>
  )
}

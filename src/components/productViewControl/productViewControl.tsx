import './productViewControl.scss'
import { useSearchParams } from 'react-router-dom'

interface IProductViewControlProps {
  className: string
}

export const ProductViewControl = ({ className }: IProductViewControlProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  function listBtnClickHandler() {
    setSearchParams({ view: 'list' })
  }
  function gridBtnClickHandler() {
    setSearchParams({ view: 'grid' })
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
        Найдено товаров: <span className="view-control__count">0</span>
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

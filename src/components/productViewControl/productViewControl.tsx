import './productViewControl.scss'

interface IProductViewControlProps {
  className: string
}

export const ProductViewControl: React.FC<IProductViewControlProps> = ({
  className,
}: IProductViewControlProps) => {
  return (
    <div className={className}>
      <select className="view-control__select">
        <option selected>Сортировать по умолчанию</option>
        <option>По цене: ↓</option>
        <option>По цене: ↑</option>
        <option>По наличию: ↓</option>
        <option>По наличию: ↑</option>
      </select>
      <p className="view-control__found">
        Найдено товаров: <span className="view-control__count">0</span>
      </p>
      <div className="view-control__views">
        <button className="view-control__list-btn"></button>
        <button className="view-control__grid-btn"></button>
      </div>
    </div>
  )
}

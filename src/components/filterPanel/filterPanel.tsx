import './filterPanel.scss'

export const FilterPanel = () => {
  return (
    <section className="filter">
      <div className="filter__buttons">
        <button>кнопка</button>
        <button>кнопка</button>
      </div>
      <ul className="filter__list list">
        <p className="list__title">Категория</p>
        <li className="list__item"></li>
      </ul>
    </section>
  )
}

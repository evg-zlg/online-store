import './categoryItem.scss'
import { IProduct } from '../../types'
import { useSearchParams } from 'react-router-dom'
import { products } from '../../data/data'
import { deleteParam } from '../utility/utility'

interface ICategoryItemProps {
  item: string
  productCurrent: IProduct[]
  type: string
  index?: number
}

export const CategoryItem = ({
  item,
  productCurrent,
  type,
  index,
}: ICategoryItemProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  let checked = searchParams.get(type)?.includes(String(index))
  let productCurrentCount =
    type === 'categories'
      ? productCurrent.filter(
          (productCurrent) => productCurrent.category === item,
        ).length
      : productCurrent.filter((productCurrent) =>
          productCurrent.tags.join(' ').includes(item),
        ).length
  const productTotalCount =
    type === 'categories'
      ? products.filter((product) => product.category === item).length
      : products.filter((product) => product.tags.join(' ').includes(item))
          .length
  function clickCheckboxHandler() {
    const url = new URL(window.location.href)
    if (searchParams.has(type)) {
      let params = url.searchParams.get(type)
      params?.includes(String(index))
        ? (params = deleteParam(String(index), params))
        : (params += `.${index}`)
      params
        ? url.searchParams.set(type, params)
        : url.searchParams.delete(type)
    } else {
      url.searchParams.append(type, String(index))
    }
    setSearchParams(url.searchParams)
  }
  return (
    <li className="list__item">
      <label className="list__label" htmlFor={type + index}>
        <input
          onClick={clickCheckboxHandler}
          className="list__checkbox"
          checked={searchParams.get(type)?.includes(String(index)) || false}
          onChange={() => {
            checked = !checked
          }}
          type="checkbox"
          id={type + index}
        ></input>
        {item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()}
      </label>
      <label className="list__results">{`(${productCurrentCount}/${productTotalCount})`}</label>
    </li>
  )
}

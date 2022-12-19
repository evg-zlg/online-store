import './productItemPage.scss'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../types'
import { products } from '../../data/data'

export function ProductItem() {
  const params = useParams()
  const product: IProduct = products.filter(
    (el) => el.id === Number(params.id),
  )[0]
  return (
    <>
      <h2>Страница товара {product.name}</h2>
      {product.images.map((img) => {
        return (
          <>
            <img
              className="img"
              key={img}
              alt={product.name}
              src={require('../../data' + img.slice(1))}
            ></img>
          </>
        )
      })}
    </>
  )
}

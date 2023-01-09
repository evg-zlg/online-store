import './totalPrice.scss'

const TotalPrice = ({
  discount,
  totalPrice,
}: {
  discount: string[]
  totalPrice: number
}) => {
  if (!discount.length) {
    return (
      <div className="content__element">
        <p className="content__title">Итого:</p>
        <p className="content__number">{totalPrice} руб.</p>
      </div>
    )
  }
  let totalDiscountPrice = totalPrice
  discount.forEach((discName) => {
    if (discName === 'RS') {
      totalDiscountPrice -= totalPrice * 0.1
    }
    if (discName === 'EPM') {
      totalDiscountPrice -= totalPrice * 0.2
    }
  })
  return (
    <div className="content__discount discount">
      <p className="discount__title">Итого:</p>
      <p className="discount__number discount__number--line">
        {totalPrice} руб.
      </p>
      <p className="discount__number">{totalDiscountPrice} руб.</p>
    </div>
  )
}

export default TotalPrice

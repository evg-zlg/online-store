import './cartPage.scss';
import { ProductCart } from './components/productCart/productCart';
import { ChangeEvent, useState } from 'react';
import { products } from '../../data/data';
import usePagination from './components/pagination/usePagination';
import { Pagination } from './components/pagination/pagination';
import TotalPrice from '../../components/totalPrice/totalPrice';

interface ICartPage {
  appCallback: (a: number, b: number) => void;
  setActive: (bool: boolean) => void;
}

export const CartPage: React.FC<ICartPage> = ({ appCallback, setActive }) => {
  const url = new URL(window.location.href);
  let currentItem = +(url.searchParams.get('items') || 3);
  if (currentItem) currentItem = 3;
  const [value, setValue] = useState(currentItem || 3);
  const {
    firstItemIndex,
    lastItemIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    itemPerPage: +value,
    count: JSON.parse(localStorage.getItem('cart') || '[]').length,
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  let [localArr, setLocalArr] = useState(
    JSON.parse(localStorage.getItem('cart') || '[]'),
  );
  const deleteItemCallback = (id: number) => {
    const newLocalArr = localArr.filter(
      (productid: number) => productid !== id,
    );
    localStorage.setItem('cart', JSON.stringify(newLocalArr));
    const objectParse = JSON.parse(localStorage.getItem('object') || '{}');
    delete objectParse[id];
    localStorage.setItem('object', JSON.stringify(objectParse));
    setLocalArr(newLocalArr);
  };
  const storageCallback = (storage: Record<string, number>) => {
    let price = 0;
    let count = 0;
    for (const product of products) {
      if (Object.keys(storage).includes(product.id.toString())) {
        price += product.price * storage[product.id];
        count += storage[product.id];
      }
    }
    setTotalPrice(price);
    setTotalCount(count);
    appCallback(price, count);
  };

  const [promo, setPromo] = useState('');
  const [promoError, setPromoError] = useState(false);

  const promoVerify = (e: ChangeEvent<HTMLInputElement>) => {
    let error = false;
    const newPromoValue = e.target.value;
    let promoCodeRS = 'RS';
    let promoCodeEPM = 'EPM';
    if (newPromoValue === promoCodeRS || newPromoValue === promoCodeEPM) {
      error = false;
    } else {
      error = true;
    }
    setPromoError(error);
  };

  const handleDiscount = (e: ChangeEvent<HTMLInputElement>) => {
    promoVerify(e);
    setPromo(e.target.value);
  };
  let discountInit = JSON.parse(localStorage.getItem('discount') || '[]');
  const [discount, setDiscount] = useState(discountInit as string[]);

  const handleApplyDiscount = () => {
    if (discount.includes(promo)) return;
    const newDiscount = [...discount, promo];
    setDiscount(newDiscount);
    localStorage.setItem('discount', JSON.stringify(newDiscount));
  };

  const deletePromo = (elem: string) => {
    const newDiscount = [...discount.filter((promoName) => promoName !== elem)];
    setDiscount(newDiscount);
    localStorage.setItem('discount', JSON.stringify(newDiscount));
  };

  if (JSON.parse(localStorage.getItem('cart') || '[]').length === 0) {
    return (
      <>
        <div className="cart-page__empty">?????????????? ??????????</div>
      </>
    );
  } else
    return (
      <>
        <section className="cart-page">
          <Pagination
            setValue={setValue}
            setPage={setPage}
            prevPage={prevPage}
            nextPage={nextPage}
            page={page}
            totalPages={totalPages}
            value={value}
          />
          <div className="cart-page__container">
            <div className="cart-page__content content">
              <div className="content__cart-products cart-products">
                <div className="content__title title">
                  <p className="title__num">???</p>
                  <p className="title__name">??????????</p>
                  <p className="title__category">??????????????????</p>
                  <p className="title__count">??????????</p>
                  <p className="title__price">????????</p>
                  <p className="title__pagination">????????????????????</p>
                  <p className="title__sum">??????????</p>
                </div>
                {localArr.map((id: number, index: number) => {
                  if (index + 1 <= firstItemIndex || index + 1 > lastItemIndex)
                    return null;
                  return (
                    <ProductCart
                      key={id}
                      cartId={id}
                      cardInd={index}
                      storageCallback={storageCallback}
                      deleteItemCallback={deleteItemCallback}
                    />
                  );
                })}
              </div>
            </div>
            <div className="cart-page__summary summary">
              <p className="summary__title">???????????? ????????????</p>
              <div className="summary__content content">
                <div className="content__element">
                  <p className="content__title">??????????????????????:</p>
                  <p className="content__number">{totalCount} ????.</p>
                </div>
                <TotalPrice discount={discount} totalPrice={totalPrice} />
                <input
                  type="text"
                  className="content__input"
                  value={promo}
                  onChange={handleDiscount}
                  placeholder={'?????????????? "RS" ?????? "EPM"'}
                  onBlur={promoVerify}
                />
                {promoError && (
                  <p className="content__error">*???????????????? ??????????????????????</p>
                )}
                {!!promo && !promoError && (
                  <button
                    className="content__btn"
                    onClick={handleApplyDiscount}
                  >
                    ???????????????? ????????????
                  </button>
                )}
                {!!discount.length &&
                  discount.map((promoName) => {
                    let discountValue = '';
                    if (promoName === 'RS') discountValue = '10%';
                    if (promoName === 'EPM') discountValue = '20%';
                    return (
                      <div className="discount__category" key={promoName}>
                        <span className="discount__name">{promoName}</span>
                        <span className="discount__name">{discountValue}</span>
                        <button
                          className="discount__btn"
                          onClick={() => deletePromo(promoName)}
                        >
                          ??????????????
                        </button>
                      </div>
                    );
                  })}
              </div>
              <button className="summary__btn" onClick={() => setActive(true)}>
                ???????????????? ??????????
              </button>
            </div>
          </div>
        </section>
      </>
    );
};

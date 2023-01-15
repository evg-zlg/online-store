import { Route, Routes } from 'react-router-dom';
import { ProductItemPage } from '../productItemPage/productItemPage';
import ProductsPage from '../productsPage/productsPage';
import CartPage from '../cartPage/cartPage';
import { NotFoundPage404 } from '../notFoundPage404/notFoundPage404';

interface IRoutesProps {
  countInCartHandler: (num: number) => void;
  changeBannerIndex: () => void;
  bannerIndex: number;
  setActive: (bool: boolean) => void;
  appCallback: (a: number, b: number) => void;
}

const Router = ({
  countInCartHandler,
  bannerIndex,
  changeBannerIndex,
  setActive,
  appCallback,
}: IRoutesProps) => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <ProductsPage
            countInCartHandler={countInCartHandler}
            changeBannerIndex={changeBannerIndex}
            bannerIndex={bannerIndex}
          />
        }
      ></Route>
      <Route
        path={'/item/:id'}
        element={
          <ProductItemPage
            countInCartHandler={countInCartHandler}
            setActive={setActive}
          />
        }
      ></Route>
      <Route
        path={'/cart'}
        element={<CartPage appCallback={appCallback} setActive={setActive} />}
      ></Route>
      <Route path="/item/*" element={<NotFoundPage404 />}></Route>
      <Route path="*" element={<NotFoundPage404 />}></Route>
    </Routes>
  );
};

export { Router };

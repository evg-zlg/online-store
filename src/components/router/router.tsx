import { Route, Routes } from 'react-router-dom';
import { ProductItemPage } from '../../pages/productItemPage/productItemPage';
import { ProductsPage } from '../../pages/productsPage/productsPage';
import { CartPage } from '../../pages/cartPage/cartPage';
import { NotFoundPage404 } from '../../pages/notFoundPage404/notFoundPage404';
import { FC } from 'react';

interface IRoutesProps {
  countInCartHandler: (num: number) => void;
  changeBannerIndex: () => void;
  bannerIndex: number;
  active: boolean;
  setActive: (bool: boolean) => void;
  appCallback: (a: number, b: number) => void;
}

export const Router: FC<IRoutesProps> = ({
  countInCartHandler,
  bannerIndex,
  changeBannerIndex,
  active,
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

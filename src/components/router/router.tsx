import { Route, Routes } from 'react-router-dom'
import { ProductItemPage } from '../productItemPage/productItemPage'
import ProductsPage from '../productsPage/productsPage'
import CartPage from '../cartPage/cartPage'
import { NotFoundPage404 } from '../notFoundPage404/notFoundPage404'

interface IRoutesProps {
  numHandler: (num: number) => void
  changeBannerIndex: () => void
  bannerIndex: number
  active: boolean
  setActive: (bool: boolean) => void
  appCallback: (a: number, b: number) => void
}

const Router = ({
  numHandler,
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
            numHandler={numHandler}
            changeBannerIndex={changeBannerIndex}
            bannerIndex={bannerIndex}
          />
        }
      ></Route>
      <Route
        path={'/item/:id'}
        element={
          <ProductItemPage
            numHandler={numHandler}
            active={active}
            setActive={setActive}
          />
        }
      ></Route>
      <Route
        path={'/cart'}
        element={
          <CartPage
            appCallback={appCallback}
            active={active}
            setActive={setActive}
          />
        }
      ></Route>
      <Route path="/item/*" element={<NotFoundPage404 />}></Route>
      <Route path="*" element={<NotFoundPage404 />}></Route>
    </Routes>
  )
}

export { Router }

import './App.scss'
import ProductsPage from './components/productsPage/productsPage'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { ProductItemPage } from './components/productItemPage/productItemPage'
import CartPage from './components/cartPage/cartPage'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ModalWindow from './components/modalWindow/modalWindow'
import { NotFoundPage404 } from './components/notFoundPage404/notFoundPage404'

function App() {
  const initialNum = JSON.parse(localStorage.getItem('cart') || '[]').length
  const [, setNum] = useState(initialNum)
  const numHandler = (num: number): void => {
    setNum((prevState: number) => {
      return (prevState += num)
    })
  }
  const [bannerIndex, setBannerIndex] = useState(0)
  const [, setTotalPrice] = useState(0)
  const [, setTotalCount] = useState(0)

  const [modalActive, setmodalActive] = useState(false)

  const appCallback = (price: number, count: number) => {
    setTotalPrice(price)
    setTotalCount(count)
  }
  const changeBannerIndex = () => {
    setBannerIndex((bannerIndex) => {
      return bannerIndex === 0 ? 1 : 0
    })
  }

  return (
    <>
      <ModalWindow active={modalActive} setActive={setmodalActive} />
      <Header />
      <main className="main">
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
                active={modalActive}
                setActive={setmodalActive}
              />
            }
          ></Route>
          <Route
            path={'/cart'}
            element={
              <CartPage
                appCallback={appCallback}
                active={modalActive}
                setActive={setmodalActive}
              />
            }
          ></Route>
          <Route path="/item/*" element={<NotFoundPage404 />}></Route>
          <Route path="*" element={<NotFoundPage404 />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

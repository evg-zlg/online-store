import './App.scss'
import ProductsPage from './components/productsPage/productsPage'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { ProductItem } from './components/productItemPage/productItemPage'
import CartPage from './components/cartPage/cartPage'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage404 } from './components/notFoundPage404/notFoundPage404'

function App() {
  const initialNum = JSON.parse(localStorage.getItem('cart') || '[]').length
  const [num, setNum] = useState(initialNum)
  const numHandler = (num: number): void => {
    setNum((prevState: number) => {
      return (prevState += num)
    })
  }

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  const appCallback = (price: number, count: number) => {
    setTotalPrice(price)
    setTotalCount(count)
  }
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path={'/'}
            element={<ProductsPage numHandler={numHandler} />}
          ></Route>
          <Route
            path={'/item/:id'}
            element={<ProductItem numHandler={numHandler} />}
          ></Route>
          <Route
            path={'/cart'}
            element={<CartPage appCallback={appCallback} />}
          ></Route>
          <Route path="*" element={<NotFoundPage404 />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

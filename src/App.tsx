import './App.scss'
import ProductsPage from './components/productsPage/productsPage'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { ProductItem } from './components/productItemPage/productItemPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'

function App() {
  const initialNum = JSON.parse(localStorage.getItem('cart') || '[]').length
  const [num, setNum] = useState(initialNum)
  const numHandler = (num: number): void => {
    setNum((prevState: number) => {
      return (prevState += num)
    })
  }
  return (
    <BrowserRouter>
      <Header num={num} />
      <main className="main">
        <Routes>
          <Route
            path={'/'}
            element={<ProductsPage numHandler={numHandler} />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path={'/item/:id'}
            element={<ProductItem numHandler={numHandler} />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

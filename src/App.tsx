import './App.scss'
import ProductsPage from './components/productsPage/productsPage'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { ProductItem } from './components/productItemPage/productItemPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path={'/'} element={<ProductsPage />}></Route>
        </Routes>
        <Routes>
          <Route path={'/item/:id'} element={<ProductItem />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import './App.scss'
import ProductsPage from './components/productsPage/productsPage'
import { ProductItem } from './components/productItemPage/productItemPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <h1 className="content__title">Hello online-store</h1>
        <Routes>
          <Route path={'/'} element={<ProductsPage />}></Route>
        </Routes>
        <Routes>
          <Route path={'/item/:id'} element={<ProductItem />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

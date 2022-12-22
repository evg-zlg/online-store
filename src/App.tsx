import './App.scss'
import ProductsPage from './components/productsPage/productsPage'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { ProductItem } from './components/productItemPage/productItemPage'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  function filtered(loc: Object) {
    console.log('location: ', loc)
  }

  filtered(location)

  return (
    <>
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
    </>
  )
}

export default App

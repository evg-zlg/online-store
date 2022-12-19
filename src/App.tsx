import './App.scss'
import ProductsPage from './components/productsPage/productsPage'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <ProductsPage />
      </div>
      <Footer />
    </>
  )
}

export default App

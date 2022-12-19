import './App.scss'
import ProductsPage from './components/productsPage/productsPage'
import Header from './components/header/header'

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <ProductsPage />
      </div>
    </>
  )
}

export default App

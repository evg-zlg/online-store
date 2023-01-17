import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { useState } from 'react';
import ModalWindow from './components/modalWindow/modalWindow';
import { Router } from './components/router/router';

function App() {
  const initialNum = JSON.parse(localStorage.getItem('cart') || '[]').length;
  const [, setNum] = useState(initialNum);
  const countInCartHandler = (num: number): void => {
    setNum((prevState: number) => {
      return (prevState += num);
    });
  };
  const [bannerIndex, setBannerIndex] = useState(0);
  const [, setTotalPrice] = useState(0);
  const [, setTotalCount] = useState(0);

  const [modalActive, setmodalActive] = useState(false);

  const appCallback = (price: number, count: number) => {
    setTotalPrice(price);
    setTotalCount(count);
  };
  const changeBannerIndex = () => {
    setBannerIndex((bannerIndex) => {
      return bannerIndex === 0 ? 1 : 0;
    });
  };

  return (
    <>
      <ModalWindow active={modalActive} setActive={setmodalActive} />
      <Header />
      <main className="main">
        <Router
          countInCartHandler={countInCartHandler}
          changeBannerIndex={changeBannerIndex}
          bannerIndex={bannerIndex}
          active={modalActive}
          setActive={setmodalActive}
          appCallback={appCallback}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;

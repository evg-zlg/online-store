import './buyNowBtn.scss';
import { useState } from 'react';

const BuyNowBtn = ({
  onClick,
  id,
}: {
  onClick: (num: number) => void;
  id: number;
}) => {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  let objectParse = JSON.parse(localStorage.getItem('object') || '{}');
  const callbackNum = () => {
    if (num === 1) {
      setNum(-1);
      cart.push(id);
      objectParse[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('object', JSON.stringify(objectParse));
    onClick(num);
  };
  const [num, setNum] = useState(cart.includes(id) ? -1 : 1);
  return (
    <button onClick={callbackNum} className="button__buy">
      Купить сейчас
    </button>
  );
};

export default BuyNowBtn;

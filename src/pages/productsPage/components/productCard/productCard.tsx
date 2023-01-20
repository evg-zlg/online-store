import { IProduct } from '../../../../types';
import { NavLink } from 'react-router-dom';
import './productCard.scss';
import AddToCartBtn from '../../../../components/UI/addToCartBtn/addToCartBtn';
import { Carousel } from '../../../../components/UI/carousel/carousel';
import { FC } from 'react';

interface IProductCardProps {
  product: IProduct;
  countInCartHandler: (num: number) => void;
}

export const ProductCard: FC<IProductCardProps> = ({
  product,
  countInCartHandler,
}: IProductCardProps) => {
  return (
    <div className="card">
      <NavLink className="card__link-title" to={'/item/' + product.id}>
        <h2 className="card__title">{product.name}</h2>
      </NavLink>
      <Carousel
        className="card__img"
        images={product.images}
        alt={product.name}
        currentImage={product.images[0]}
      />
      <div className="card__info">
        <p className="card__price">Цена: {product.price}</p>
        <p className="card__count">Остаток: {product.count}</p>
      </div>
      <div className="card__buttons">
        <AddToCartBtn onClick={countInCartHandler} id={product.id} />
        <NavLink className="card__link-inf" to={'/item/' + product.id}>
          <button className={'card__btn-inf'}>Подробней</button>
          {product.video && <div className="card__video-icon"></div>}
        </NavLink>
      </div>
      <div className="card__tag-items">
        {product.tags.map((tag) => {
          return (
            <p key={tag} className="card__tag">
              {tag.slice(0, 1).toUpperCase() + tag.slice(1).toLowerCase()}
            </p>
          );
        })}
      </div>
    </div>
  );
};

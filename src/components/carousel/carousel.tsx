import { useState } from 'react'
import './carousel.scss'

interface ICarouselProps {
  images: string[]
  currentImage: string
  alt: string
  className: string
}

export const Carousel = ({
  images,
  alt,
  className,
  currentImage,
}: ICarouselProps) => {
  const [showCarousel, setShowCarousel] = useState(false)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  function handleClickZoomBtn() {
    setShowCarousel((prev) => !prev)
  }
  showCarousel
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = '')
  function handleClickBigBoxImg(e: React.MouseEvent) {
    setShowCarousel(false)
  }
  function handleClickBigImg(e: React.MouseEvent) {
    e.stopPropagation()
  }
  function handleClickLeftBtn(e: React.MouseEvent) {
    e.stopPropagation()
    currentImgIndex === 0
      ? setCurrentImgIndex(images.length - 1)
      : setCurrentImgIndex(currentImgIndex - 1)
  }
  function handleClickRightBtn(e: React.MouseEvent) {
    e.stopPropagation()
    currentImgIndex === images.length - 1
      ? setCurrentImgIndex(0)
      : setCurrentImgIndex(currentImgIndex + 1)
  }
  return (
    <div className={`${className} carousel`}>
      {!showCarousel && (
        <div className="carousel__small-box">
          <button
            className="carousel__zoom"
            onClick={handleClickZoomBtn}
          ></button>
          <img
            className="carousel__img"
            src={require('../../data' + currentImage.slice(1))}
            alt={alt}
          ></img>
        </div>
      )}
      {showCarousel && (
        <div className="carousel__big-box" onClick={handleClickBigBoxImg}>
          <button className="carousel__close-btn">x</button>
          <div className="carousel__img-wrapper">
            <button
              className="carousel__left-btn"
              onClick={handleClickLeftBtn}
            >{`<`}</button>
            <button
              className="carousel__right-btn"
              onClick={handleClickRightBtn}
            >{`>`}</button>
            <img
              className="carousel__img"
              src={require('../../data' + images[currentImgIndex].slice(1))}
              alt={alt}
              onClick={handleClickBigImg}
            ></img>
          </div>
        </div>
      )}
    </div>
  )
}

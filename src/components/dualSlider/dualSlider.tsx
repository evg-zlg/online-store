import React, { useState } from 'react'
import './dualSlider.scss'

interface IDualSliderProps {
  className?: string
  minValue: number
  maxValue: number
  step: number
  currency?: string
}

export const DualSlider = ({
  className,
  minValue,
  maxValue,
  step,
  currency,
}: IDualSliderProps) => {
  const [leftSlider, setLeftSlider] = useState(minValue)
  const [rightSlider, setRightSlider] = useState(maxValue)
  //size of thumbs
  const sizeThumbs = 20
  function handleLeftInput(e: React.ChangeEvent<HTMLInputElement>) {
    const leftPoint = parseInt(e.target.value)
    // if (leftPoint < (rightSlider - sizeThumbs * ())) {
    //   setLeftSlider(parseInt(e.target.value))
    // }
    // console.log('left:', leftPoint, 'rigth:', rightSlider)
    // console.log(e.target.parentNode)
  }
  function handleRightInput(e: React.ChangeEvent<HTMLInputElement>) {
    setRightSlider(parseInt(e.target.value))
  }
  const leftText = currency ? leftSlider + ' ' + currency : leftSlider
  const rightText = currency ? rightSlider + ' ' + currency : rightSlider
  return (
    <div className={className + ` dual-slider`}>
      <div className="dual-slider__text-block">
        <label className="dual-slider__leftText">{leftText}</label>
        <label className="dual-slider__rightText">{rightText}</label>
      </div>
      <span className="dual-slider__inputs">
        <input
          className="dual-slider__left"
          min={minValue}
          max={maxValue}
          step={step}
          value={leftSlider}
          type="range"
          onInput={handleLeftInput}
        ></input>
        <input
          min={minValue}
          max={maxValue}
          step={step}
          value={rightSlider}
          className="dual-slider__right"
          type="range"
          onInput={handleRightInput}
        ></input>
      </span>
    </div>
  )
}

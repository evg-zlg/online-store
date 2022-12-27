import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './dualSlider.scss'

interface IDualSliderProps {
  className?: string
  minValue: number
  maxValue: number
  leftValue: string
  rightValue: string
  step: number
  currency?: string
}

export const DualSlider = ({
  className,
  minValue,
  maxValue,
  leftValue,
  rightValue,
  step,
  currency,
}: IDualSliderProps) => {
  const url = new URL(window.location.href)
  const [searchParams, setSearchParams] = useSearchParams()
  // const [leftSlider, setLeftSlider] = useState(
  //   searchParams.get('minprice') || leftValue,
  // )
  // const [rightSlider, setRightSlider] = useState(
  //   searchParams.get('maxprice') || rightValue,
  // )
  function handlerLeftInput(e: React.ChangeEvent<HTMLInputElement>) {
    url.searchParams.set('minprice', e.target.value)
    setSearchParams(url.searchParams)
  }
  function handlerRightInput(e: React.ChangeEvent<HTMLInputElement>) {
    url.searchParams.set('maxprice', e.target.value)
    setSearchParams(url.searchParams)
  }
  let leftText = currency
    ? (url.searchParams.get('minprice') || leftValue) + ' ' + currency
    : url.searchParams.get('minprice') || leftValue
  let rightText = currency
    ? (url.searchParams.get('maxprice') || rightValue) + ' ' + currency
    : url.searchParams.get('maxprice') || rightValue
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
          value={url.searchParams.get('minprice') || leftValue}
          type="range"
          onInput={handlerLeftInput}
        ></input>
        <input
          className="dual-slider__right"
          min={minValue}
          max={maxValue}
          step={step}
          value={url.searchParams.get('maxprice') || rightValue}
          type="range"
          onInput={handlerRightInput}
        ></input>
      </span>
    </div>
  )
}

import { useSearchParams } from 'react-router-dom'
import './dualSlider.scss'

interface IDualSliderProps {
  className?: string
  minValue: number
  maxValue: number
  leftValue: string
  rightValue: string
  title: string
  type: string
  step: number
  currency?: string
}

export const DualSlider = ({
  className,
  minValue,
  maxValue,
  leftValue,
  rightValue,
  title,
  type,
  step,
  currency,
}: IDualSliderProps) => {
  const minParam = `min${type}`
  const maxParam = `max${type}`
  const url = new URL(window.location.href)
  const [searchParams, setSearchParams] = useSearchParams()
  function handlerLeftInput(e: React.ChangeEvent<HTMLInputElement>) {
    url.searchParams.set(minParam, e.target.value)
    setSearchParams(url.searchParams)
  }
  function handlerRightInput(e: React.ChangeEvent<HTMLInputElement>) {
    url.searchParams.set(maxParam, e.target.value)
    setSearchParams(url.searchParams)
  }
  let leftText = currency
    ? (url.searchParams.get(minParam) || leftValue) + ' ' + currency
    : url.searchParams.get(minParam) || leftValue
  let rightText = currency
    ? (url.searchParams.get(maxParam) || rightValue) + ' ' + currency
    : url.searchParams.get(maxParam) || rightValue
  return (
    <div className={className + ` dual-slider`}>
      <h2 className="dual-slider__title">{title}</h2>
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
          value={url.searchParams.get(minParam) || leftValue}
          type="range"
          onInput={handlerLeftInput}
        ></input>
        <input
          className="dual-slider__right"
          min={minValue}
          max={maxValue}
          step={step}
          value={url.searchParams.get(maxParam) || rightValue}
          type="range"
          onInput={handlerRightInput}
        ></input>
      </span>
    </div>
  )
}

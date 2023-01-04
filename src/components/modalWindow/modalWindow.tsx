import { ChangeEvent, useState } from 'react'
import './modalWindow.scss'

interface IModalWindow {
  active: boolean
  setActive: (bool: boolean) => void
}

enum BankImg {
  'bank-card__img',
  'bank-card__img bank-card__img--amEx',
  'bank-card__img bank-card__img--visa',
  'bank-card__img bank-card__img--master',
}

export default function ModalWindow({ active, setActive }: IModalWindow) {
  const [bankCardClass, setBankCardClass] = useState(0)
  const [nameValue, setNameValue] = useState('')
  const [nameError, setNameError] = useState(false)

  const [telValue, setTelValue] = useState('')
  const [telError, setTelError] = useState(false)

  const [mailValue, setMailValue] = useState('')
  const [mailError, setMailError] = useState(false)

  const [adressValue, setAdressValue] = useState('')
  const [adressError, setAdressError] = useState(false)

  const [cardNumberValue, setCardNumberValue] = useState('')
  const [cardNumberError, setCardNumberError] = useState(false)

  const [cardDataValue, setCardDataValue] = useState('')
  const [cardDataError, setCardDataError] = useState(false)

  const [cardCvvValue, setCardCvvValue] = useState('')
  const [cardCvvError, setCardCvvError] = useState(false)

  const nameVerify = (e: ChangeEvent<HTMLInputElement>) => {
    let error = false
    const newNameValue = e.target.value
    if (newNameValue.split(' ').length < 2) error = true
    if (newNameValue.split(' ').some((word) => word.length < 4)) {
      error = true
    }
    setNameError(error)
  }

  const telVerify = (e: ChangeEvent<HTMLInputElement>) => {
    let error = false
    const newTelValue = e.target.value
    let tel = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    if (newTelValue.match(tel)) {
      error = false
    } else {
      error = true
    }
    setTelError(error)
  }

  const mailVerify = (e: ChangeEvent<HTMLInputElement>) => {
    let error = false
    const newMailValue = e.target.value
    let mail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    if (newMailValue.match(mail)) {
      error = false
    } else {
      error = true
    }
    setMailError(error)
  }

  const adressVerify = (e: ChangeEvent<HTMLInputElement>) => {
    let error = false
    const newCardValue = e.target.value
    if (newCardValue.split(' ').length < 3) error = true
    if (newCardValue.split(' ').some((word) => word.length < 5)) {
      error = true
    }
    setAdressError(error)
  }

  const cardNumberVerify = (e: ChangeEvent<HTMLInputElement>) => {
    let error = false
    const newNumberValue = e.target.value.replaceAll(' ', '')
    let cardAmEx = /^(?:3[47][0-9]{14})$/
    let cardVisa = /^(?:4[0-9]{15})$/
    let cardMaster = /^(?:5[1-5][0-9]{14})$/
    if (newNumberValue.match(cardAmEx)) {
      error = false
      setBankCardClass(1)
    } else if (newNumberValue.match(cardVisa)) {
      error = false
      setBankCardClass(2)
    } else if (newNumberValue.match(cardMaster)) {
      error = false
      setBankCardClass(3)
    } else {
      error = true
      setBankCardClass(0)
    }
    setCardNumberError(error)
  }

  const cardDataVerify = (e: ChangeEvent<HTMLInputElement>) => {
    let error = false
    const newDataValue = e.target.value.replace('/', '')
    let cardDate = /^0[1-9]|1[0-2][0-9]{2}$/
    if (newDataValue.match(cardDate)) {
      error = false
    } else {
      error = true
    }
    setCardDataError(error)
  }

  const cardCvvVerify = (e: ChangeEvent<HTMLInputElement>) => {
    let error = false
    const newCvvValue = e.target.value
    let cvv = /^(?:[0-9]{3})$/
    if (newCvvValue.match(cvv)) {
      error = false
    } else {
      error = true
    }
    setCardCvvError(error)
    newCvvValue.replace(/[^\d]/g, '')
  }

  return (
    <>
      <section
        className={
          active ? 'checkout-window checkout-window--active' : 'checkout-window'
        }
        onClick={() => {
          setActive(false)
          setBankCardClass(0)
          setNameValue('')
          setNameError(false)
          setTelValue('')
          setTelError(false)
          setMailValue('')
          setMailError(false)
          setAdressValue('')
          setAdressError(false)
          setCardNumberValue('')
          setCardNumberError(false)
          setCardDataValue('')
          setCardDataError(false)
          setCardCvvValue('')
          setCardCvvError(false)
        }}
      >
        <div
          className="checkout-window__popup popup"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="popup__close close"
            onClick={() => {
              setActive(false)
              setBankCardClass(0)
              setNameValue('')
              setNameError(false)
              setTelValue('')
              setTelError(false)
              setMailValue('')
              setMailError(false)
              setAdressValue('')
              setAdressError(false)
              setCardNumberValue('')
              setCardNumberError(false)
              setCardDataValue('')
              setCardDataError(false)
              setCardCvvValue('')
              setCardCvvError(false)
            }}
          >
            <span className="close__line"></span>
            <span className="close__line"></span>
          </div>
          <p className="popup__title">Персональные данные</p>
          <form className="popup__form form">
            <div className="form__input-wrapper">
              <div className="form__item">
                <p className="form__title">Имя</p>{' '}
                {nameError && (
                  <p className="form__error">
                    *Введите два слова, каждое не менее 3 букв
                  </p>
                )}
              </div>
              <input
                type="text"
                className="form__name input"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder={'Иванов Иван'}
                onBlur={nameVerify}
              />
            </div>
            <div className="form__input-wrapper">
              <div className="form__item">
                <p className="form__title">Телефон</p>
                {telError && <p className="form__error">*Ввод неверный</p>}
              </div>
              <input
                type="tel"
                className="form__telephone input"
                value={telValue}
                onChange={(e) => setTelValue(e.target.value)}
                placeholder={'+79513498575'}
                onBlur={telVerify}
              />
            </div>
            <div className="form__input-wrapper">
              <div className="form__item">
                <p className="form__title">Электронная почта</p>
                {mailError && <p className="form__error">*Ввод неверный</p>}
              </div>
              <input
                type="email"
                className="form__mail input"
                value={mailValue}
                onChange={(e) => setMailValue(e.target.value)}
                placeholder={'email@gmail.com'}
                onBlur={mailVerify}
              />
            </div>
            <div className="form__input-wrapper">
              <div className="form__item">
                <p className="form__title">Адрес</p>
                {adressError && (
                  <p className="form__error">
                    *Введите три слова, каждое не менее 5 букв
                  </p>
                )}
              </div>
              <input
                type="text"
                className="form__adress input"
                value={adressValue}
                onChange={(e) => setAdressValue(e.target.value)}
                placeholder={'Город поселение улица'}
                onBlur={adressVerify}
              />
            </div>
            <div className="form__card bank-card">
              <div className={BankImg[bankCardClass]}></div>
              <div className="form__item">
                <p className="form__title">Номер карты</p>
                {cardNumberError && (
                  <p className="form__error">*Неправильный номер карты</p>
                )}
              </div>
              <input
                type="text"
                className="bank-card__number input"
                value={cardNumberValue}
                onChange={(e) => {
                  setCardNumberValue(
                    e.target.value
                      .replace(/[^\d]/g, '')
                      .split('')
                      .reverse()
                      .join('')
                      .replace(/\B(?=(\d{4})+(?!\d))/g, (s) => ` ${s}`)
                      .split('')
                      .reverse()
                      .slice(0, 19)
                      .join(''),
                  )
                  if (e.target.value[0] === '3') {
                    setBankCardClass(1)
                  }
                  if (e.target.value[0] === '4') {
                    setBankCardClass(2)
                  }
                  if (e.target.value[0] === '5') {
                    setBankCardClass(3)
                  }
                  if (!e.target.value[0]) {
                    setBankCardClass(0)
                  }
                }}
                placeholder={'XXXX XXXX XXXX XXXX'}
                onBlur={cardNumberVerify}
              />
              <div className="form__item">
                <p className="form__title">Срок действия</p>
                {cardDataError && <p className="form__error">*Ввод неверный</p>}
              </div>
              <input
                type="text"
                className="bank-card__data input"
                value={cardDataValue}
                onChange={(e) =>
                  setCardDataValue(
                    e.target.value
                      .replace(/[^\d]/g, '')
                      .split('')
                      .reverse()
                      .join('')
                      .replace(/\B(?=(\d{2})+(?!\d))/g, (s) => `/${s}`)
                      .split('')
                      .reverse()
                      .slice(0, 5)
                      .join(''),
                  )
                }
                placeholder={'03/30'}
                onBlur={cardDataVerify}
              />
              <div className="form__item">
                <p className="form__title">CVC/CVV</p>
                {cardCvvError && <p className="form__error">*Ввод неверный</p>}
              </div>
              <input
                type="text"
                className="bank-card__cvv input"
                value={cardCvvValue}
                onChange={(e) =>
                  setCardCvvValue(
                    e.target.value.replace(/[^\d]/g, '').slice(0, 3),
                  )
                }
                placeholder={'123'}
                onBlur={cardCvvVerify}
              />
            </div>
          </form>
          <button
            className="form__btn"
            onClick={() => {
              if (
                nameError === false &&
                telValue !== '' &&
                telError === false &&
                mailValue !== '' &&
                mailError === false &&
                adressValue !== '' &&
                adressError === false &&
                cardNumberValue !== '' &&
                cardNumberError === false &&
                cardDataValue !== '' &&
                cardDataError === false &&
                cardCvvValue !== '' &&
                cardCvvError === false
              ) {
                setActive(false)
                setBankCardClass(0)
                setNameValue('')
                setNameError(false)
                setTelValue('')
                setTelError(false)
                setMailValue('')
                setMailError(false)
                setAdressValue('')
                setAdressError(false)
                setCardNumberValue('')
                setCardNumberError(false)
                setCardDataValue('')
                setCardDataError(false)
                setCardCvvValue('')
                setCardCvvError(false)
                localStorage.removeItem('cart')
                localStorage.removeItem('object')
              }
            }}
          >
            Подтвердить заказ
          </button>
        </div>
      </section>
    </>
  )
}

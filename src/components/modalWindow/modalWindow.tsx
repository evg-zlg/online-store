import { ChangeEvent, useState } from 'react'
import './modalWindow.scss'

interface IModalWindow {
  active: boolean
  setActive: (bool: boolean) => void
}

export default function ModalWindow({ active, setActive }: IModalWindow) {
  const [nameValue, setNameValue] = useState('')
  const [nameError, setNameError] = useState(false)

  const [telValue, setTelValue] = useState('')
  const [telError, setTelError] = useState(false)

  const [mailValue, setMailValue] = useState('')
  const [mailError, setMailError] = useState(false)

  const [adressValue, setAdressValue] = useState('')
  const [adressError, setAdressError] = useState(false)

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
    if (newTelValue.split('').length !== 12) error = true
    if (newTelValue.indexOf('+') === -1) error = true
    setTelError(error)
  }

  const mailVerify = (e: ChangeEvent<HTMLInputElement>) => {
    let error = false
    const newMailValue = e.target.value
    if (newMailValue.indexOf('@') === -1) error = true
    if (newMailValue.indexOf('.') === -1) error = true
    setMailError(error)
  }

  const adressVerify = (e: ChangeEvent<HTMLInputElement>) => {
    let error = false
    const newAdressValue = e.target.value
    if (newAdressValue.split(' ').length < 3) error = true
    if (newAdressValue.split(' ').some((word) => word.length < 5)) {
      error = true
    }
    setAdressError(error)
  }

  return (
    <>
      <section
        className={
          active ? 'checkout-window checkout-window--active' : 'checkout-window'
        }
        onClick={() => setActive(false)}
      >
        <div
          className="checkout-window__popup popup"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="popup__close close" onClick={() => setActive(false)}>
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
            <div className="form__card"></div>
            <button className="form__btn">Подтвердить заказ</button>
          </form>
        </div>
      </section>
    </>
  )
}

import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, toggleModal } from 'redux/weather'

const Modal = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.weather)
  const input = useRef('')
  const handleModalOutside = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchWeather(input.current.value))
    input.current.value = ''
  }

  const closeModal = () => {
    if (state.modalOpen) dispatch(toggleModal())
  }

  useEffect(() => {
    const handlePress = (event) => {
      if (event.key === 'Escape') closeModal()
    }
    addEventListener('keyup', handlePress)
    return () => removeEventListener('keyup', handlePress)
  }, [])

  const handleModalOutsideClick = (event) => {
    if (event.target.className.includes('modal__container')) closeModal()
  }
  return (
    <div
      className={`modal__container`}
      ref={handleModalOutside}
      onClick={handleModalOutsideClick}
    >
      <form onSubmit={handleSubmit}>
        <h1>Change location</h1>
        <h3>{state.modalError}</h3>
        <input ref={input} placeholder='Search by place or city' />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Modal

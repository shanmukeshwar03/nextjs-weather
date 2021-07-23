import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from 'redux/weather'

const Temperature = () => {
  const dispatch = useDispatch()
  const weather = useSelector((state) => state.weather.weather)

  const handleLocation = () => {
    dispatch(toggleModal())
  }

  return (
    <div className='temperature'>
      <div className='location'>
        <i className={`weather-icon owf owf-${weather.weather[0].id}`}></i>
        <span>{weather.weather[0].main}</span>
        <span className='title'>
          {weather.name} , {weather.sys.country}
        </span>
      </div>
      <h1>{weather.main.temp} °C</h1>
      <div className='flex'>
        <span className='title'>Min Max</span>
        <span className='value'>
          {weather.main.temp_min}°C ~ {weather.main.temp_max}°C
        </span>
      </div>
      <div className='flex'>
        <span className='title'>Coordinates</span>
        <span className='value'>
          {weather.coord.lat.toFixed(2)} Lt , {weather.coord.lon.toFixed(2)} Lg
        </span>
        <div className='temperature__changeloc' onClick={handleLocation}>
          <img src='/icons/location.svg' />
          <span>Change location</span>
        </div>
      </div>
    </div>
  )
}

export default Temperature

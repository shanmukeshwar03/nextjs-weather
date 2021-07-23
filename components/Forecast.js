import { useSelector } from 'react-redux'
import Widget from 'components/Widget'

const Forecast = () => {
  const weather = useSelector((state) => state.weather.weather)

  return (
    <div className='forecast'>
      <Widget
        title='Humidity'
        value={`${weather.main.humidity} %`}
        icon='/icons/wi-humidity.svg'
      />
      <Widget
        title='Air Pressure'
        value={`${weather.main.pressure} PS`}
        icon='/icons/wi-windy.svg'
      />
      <Widget
        title='Cloudiness'
        value={`${weather.clouds.all} %`}
        icon='/icons/wi-cloudy.svg'
      />
      <Widget
        title='Wind Speed'
        value={`${weather.wind.speed} km/h`}
        icon='/icons/wi-cloudy-windy.svg'
      />
    </div>
  )
}

export default Forecast

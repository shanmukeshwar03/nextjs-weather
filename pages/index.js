import Temperature from 'components/Temperature'
import Forecast from 'components/Forecast'
import Advice from 'components/Advice'
import Modal from 'components/Modal'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from 'redux/weather'
import { fetchAdvice } from 'redux/advice'

const Home = () => {
  const modal = useSelector((state) => state.weather)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeather())
    dispatch(fetchAdvice())
  }, [])

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="find your area weather online" />
        <meta name="keywords" content="weather ip loaction advice" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="EN"></meta>
        <title>weather</title>
      </Head>
      <div className="container">
        {modal.modalOpen && <Modal />}
        <div className="upper">
          <Temperature />
          <Forecast />
        </div>
        <div>
          <Advice />
        </div>
      </div>
    </>
  )
}

export default Home

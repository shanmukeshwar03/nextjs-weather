import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const BASE = 'https://api.openweathermap.org/data/2.5/weather'
const TOKEN = '781481e32b959d093793524f27e2f93b'

export const fetchWeather = createAsyncThunk(
  'fetchWeather',
  async (payload) => {
    if (payload) {
      try {
        const res = await fetch(
          `${BASE}?q=${payload}&units=metric&appid=${TOKEN}`
        )
        const wther = await res.json()
        return wther
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const city = await fetch('https://ip.shanmukeshwar.me/')
        const location = await city.json()
        const res = await fetch(
          `${BASE}?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${TOKEN}`
        )
        const wther = await res.json()
        return wther
      } catch (error) {
        console.log(error)
      }
    }
  }
)

const weather = createSlice({
  name: 'weather',
  initialState: {
    modalOpen: false,
    modalError: '',
    weather: {
      coord: { lon: 0, lat: 0 },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      base: 'stations',
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
      },
      visibility: 0,
      wind: { speed: 0, deg: 0 },
      clouds: { all: 0 },
      dt: 0,
      sys: {
        type: 0,
        id: 0,
        country: '',
        sunrise: 0,
        sunset: 0,
      },
      timezone: 0,
      id: 0,
      name: '',
      cod: 0,
    },
  },
  reducers: {
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen
    },
  },
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.modalError = ''
    },
    [fetchWeather.fulfilled]: (state, action) => {
      if (!action.payload.message) {
        state.weather = action.payload
        state.modalOpen = false
        state.modalError = ''
      } else {
        state.modalError = action.payload.message || 'check typo'
      }
    },
  },
})

export const { toggleModal } = weather.actions
export default weather.reducer

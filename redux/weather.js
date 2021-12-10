import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TOKEN = process.env.TOKEN;
const BASE_URL = process.env.BASE_URL;

export const fetchWeather = createAsyncThunk(
  "fetchWeather",
  async (payload) => {
    if (payload) {
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${payload}&units=metric&appid=${TOKEN}`
        );
        return response.data;
      } catch (error) {
        const errors = error.response.data;
        return { errors };
      }
    } else {
      try {
        const location = await axios.get(process.env.IP_STACK);
        const response = await axios.get(
          `${BASE_URL}?lat=${location.data.lat}&lon=${location.data.lon}&units=metric&appid=${TOKEN}`
        );
        return response.data;
      } catch (error) {
        const errors = error.response.data;
        return { errors };
      }
    }
  }
);

const weather = createSlice({
  name: "weather",
  initialState: {
    modalOpen: false,
    modalError: "",
    weather: {
      coord: { lon: 0, lat: 0 },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      base: "stations",
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
        country: "",
        sunrise: 0,
        sunset: 0,
      },
      timezone: 0,
      id: 0,
      name: "",
      cod: 0,
    },
  },
  reducers: {
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    },
  },
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.modalError = "";
    },
    [fetchWeather.fulfilled]: (state, action) => {
      if (!action.payload) return;
      if (action.payload.errors) {
        state.modalError = action.payload.message || "check typo";
        return;
      }
      state.weather = action.payload;
      state.modalOpen = false;
      state.modalError = "";
    },
  },
});

export const { toggleModal } = weather.actions;
export default weather.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAdvice = createAsyncThunk('fetchAdvice', async () => {
  const res = await fetch('https://api.adviceslip.com/advice')
  const decode = await res.json()
  return decode.slip.advice
})

const advice = createSlice({
  name: 'advice',
  initialState: {
    advice: ``,
  },
  extraReducers: {
    [fetchAdvice.fulfilled]: (state, action) => {
      state.advice = action.payload
    },
    [fetchAdvice.rejected]: (state, action) => {
      state.advice = 'Unable to fetch advice'
    },
  },
})

export default advice.reducer

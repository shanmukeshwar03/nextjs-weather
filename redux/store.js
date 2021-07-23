import { configureStore } from '@reduxjs/toolkit';
import weather from 'redux/weather';
import advice from 'redux/advice';

export default configureStore({
  reducer: {
    weather,
    advice,
  },
});

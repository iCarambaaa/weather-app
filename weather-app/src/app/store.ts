import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import currentWeatherReducer from '../features/currentWeather/currentWeatherSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentWeather: currentWeatherReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

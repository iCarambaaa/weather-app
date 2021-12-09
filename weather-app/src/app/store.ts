import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import currentWeatherReducer from '../features/currentWeather/currentWeatherSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let key = process.env.REACT_APP_REDUX_LOCAL_STORAGE_KEY 

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  transforms: [
    encryptTransform(
    {
        secretKey: key! //! asserts it will be a string not undefined nor null
    }
    )]
}


const persistedReducer = persistReducer(persistConfig, currentWeatherReducer)

export const store = configureStore({
  reducer: {
    
    currentWeather: persistedReducer

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export let persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

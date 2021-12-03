import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import currentWeather from  '../../interfaces/currentWeather'


export interface CurrentWeatherState {
  data: currentWeather | null;
  
}

const initialState: CurrentWeatherState = {
  data: null,
};



export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
            setCurrentWeather: (state, action: PayloadAction<currentWeather>) => {
                state.data = action.payload
            }
     },

});




export const { setCurrentWeather } = currentWeatherSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCurrentWeather = (state: RootState) => state.currentWeather.data;


export default currentWeatherSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const weather = createSlice({
    name: 'weather',
    initialState: {
        weatherInfo: [],
    },
    reducers: {
        weatherData: (state, action) => {
            state.weatherInfo.push(action.payload);
            console.log(action.payload);
        }
    }
});

export const { weatherData } = weather.actions;
export default weather.reducer;

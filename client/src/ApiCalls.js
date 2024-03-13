import { publicRequest } from "./RequestMethods";

// signup
export const signUpData = async (data) => {
    console.log(data);
    try {
        const res = await publicRequest.post('/signup', data);
        console.log('Response Status:', res.status);
    } catch (err) {
        console.log(err);
    }
}

// current weather
export const weatherData = async (data) => {
    try {
        const res = await publicRequest.post('/fetchweather', data)
        console.log('Response Status:', res.status);
        return res.data;
    } catch (error) {
        console.log(error);
        //    console.log(error.response.data);
    }
}

// forecat data
export const forecastData = async (data) => {
    try {
        const res = await publicRequest.post('/forecast', data)
        console.log('Response Status:', res.status);
        return res.data;
    } catch (error) {
        console.log(error);
        //    console.log(error.response.data);
    }
}
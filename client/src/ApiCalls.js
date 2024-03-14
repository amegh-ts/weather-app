import { loginUser } from "./Redux/UserRedux";
import { publicRequest } from "./RequestMethods";

const storedData = localStorage.getItem('persist:weatherapp');
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
const userId = user?.userInfo?.[0]?.id;

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

// signin
export const signInData = async (loginData, dispatch) => {
    try {
        const res = await publicRequest.post('/signin', loginData)
        console.log('Response Status:', res.status);
        const { _id: id, accessToken, type, state } = res.data;
        const userData = { id, accessToken, type, state };
        dispatch(loginUser(userData))
    } catch (error) {
        console.log(error);
    }
}

// view profile
export const viewProfile = async () => {
    try {
        const res = await userRequest.get(`/Viewprofile/${userId}`)
        console.log('Response Status:', res.status);
        return res.data
    } catch (error) {
        console.log(error);
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

// search weather
export const searchWeatherData = async (data) => {
    try {
        const res = await publicRequest.post('/searchweather', data)
        console.log('Response Status:', res.status);
        return res.data;
    } catch (error) {
        console.log(error);
        //    console.log(error.response.data);
    }
}
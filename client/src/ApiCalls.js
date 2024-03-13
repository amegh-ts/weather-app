import { publicRequest } from "./RequestMethods";

export const weatherData = async (data) => {
    try {
       const res=await publicRequest.post('/fetchweather',data)
       console.log('Response Status:', res.status);
       return res.data;

    } catch (error) {
        console.log(error);
    //    console.log(error.response.data);
    }
}

export const forecastData = async (data) => {
    try {
       const res=await publicRequest.post('/forecast',data)
       console.log('Response Status:', res.status);
       return res.data;
    } catch (error) {
        console.log(error);
    //    console.log(error.response.data);
    }
}
import { publicRequest } from "./RequestMethods";

export const weatherData = async (data) => {
    try {
       console.log('coordinates',data); 
       const res=await publicRequest.post('/fetchweather',data)
       console.log('Response Status:', res.status);
       return res.data;
    } catch (error) {
        console.log(error);
    }
}
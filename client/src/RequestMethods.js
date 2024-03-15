import axios from "axios"

const BASE_URL = "https://weather-app-server-jwpt.onrender.com/";

const storedData = localStorage.getItem('persist:weatherapp');
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;

const Token = user?.userInfo?.[0]?.accessToken;
// console.log(Token);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${Token}` }
}) 
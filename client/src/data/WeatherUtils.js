export const weatherIcon = (weather) => weather?.weatherData?.weather[0]?.icon;
export const temperature = (weather) => Math.floor(weather?.weatherData?.main?.temp);
export const feelsLike = (weather) => Math.floor(weather?.weatherData?.main?.feels_like);
export const cityName=(forecast)=>forecast?.weatherData?.city?.name;
export const airHumidity=(weather)=>weather?.weatherData?.main?.humidity;
export const airPressure=(weather)=>weather?.weatherData?.main?.pressure;
export const windSpeed=(weather)=>weather?.weatherData?.wind?.speed;
export const maxTemp=(weather)=>weather?.weatherData?.main?.temp_max;
export const minTemp=(weather)=>weather?.weatherData?.main?.temp_min;
export const maxVisibility=(weather)=>weather?.weatherData?.visibility;
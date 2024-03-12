export const weatherIcon = (weather) => weather?.weatherData?.weather[0]?.icon;
export const temperature = (weather) => Math.floor(weather?.weatherData?.main?.temp);
export const feelsLike = (weather) => Math.floor(weather?.weatherData?.main?.feels_like);

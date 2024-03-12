import './App.css'
import Navbar from './pages/Navbar'
import { useEffect, useState } from 'react';
import { weatherData } from './ApiCalls';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [weather,setWeather]=useState(null)


  useEffect(() => {
    const successHandler = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setError(null);
    };

    const errorHandler = (error) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      weatherData({ latitude, longitude })
      .then(weatherData => {
        setWeather(weatherData);
      });
    }
  }, [latitude, longitude]);

console.log(weather);

  return (
    <>
      <Navbar weather={weather}/>
    </>
  )
}

export default App

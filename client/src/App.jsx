import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './pages/Navbar'
import { useEffect, useState } from 'react';
import { forecastData, weatherData } from './ApiCalls';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from './Redux/UserRedux';
import LogedIn from './pages/LogedIn';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const reduxData = useSelector((state) => state.user.userInfo[0]);
  // console.log('reduxdata', reduxData);
  const token = reduxData?.accessToken;
  const dispatch = useDispatch()

  
  useEffect(() => {
    const successHandler = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
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
      forecastData({ latitude, longitude })
        .then(forecastData => {
          setForecast(forecastData)
        });
    }
  }, [latitude, longitude]);

  useEffect(() => {
    const validateToken = () => {
      if (token) {
        // Decode the token to get expiration time (assuming it contains an 'exp' claim)
        const decodedToken = atob(token.split('.')[1]);
        const { exp } = JSON.parse(decodedToken);

        // Check if the token is expired
        if (exp && exp * 1000 < Date.now()) {
          // Token is expired, logout the user
          dispatch(logoutUser());
          sessionStorage.clear();
        }
      }
    };

    validateToken();
  }, [token, dispatch]);

  let content;

  if (token) {
    content=<LogedIn weather={weather} forecast={forecast} />
  }else{
    content=<Navbar weather={weather} forecast={forecast} />
    // content=<Navbar  weather={weather} forecast={forecast} />
  }

  const router = createBrowserRouter([
    {
      path: '/',
      // element: <Navbar weather={weather} forecast={forecast} />,
      element:content,
    }, {
      path: '/signup',
      element: <SignUp />,
    }, {
      path: '/signin',
      element: <SignIn />,
    },{
      path: '/logedin',
      element: <LogedIn />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

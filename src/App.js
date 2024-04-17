import './App.css';
import Home from './components/Home';
import Response from './components/Response'
import { useState } from 'react';
import axios from 'axios';



export const WeatherIcons = {
  "01d": "icons/sun.svg",
  "01n": "icons/moon.svg",
  "02d": "icons/sun.svg",
  "02n": "icons/moon.svg",

  "03d": "icons/cloud.svg",
  "03n": "icons/cloud.svg",
  "04d": "icons/cloud.svg",
  "04n": "icons/cloud.svg",

  "09d": "icons/rain.svg",
  "09n": "icons/rain.svg",
  "10d": "icons/rain.svg",
  "10n": "icons/rain.svg",

  "11d": "icons/lightning.svg",
  "11n": "icons/lightning.svg",

  "13d": "icons/snow.svg",
  "13n": "icons/snow.svg",

  "50d": "icons/wind.svg",
  "50n": "icons/wind.svg",
  
};


function App() {
  const [city, updateCity] = useState();
  const [myfetch, setMyfetch] = useState();
  



      const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68ca09b0d53386f480fd1f6ae712eb98`,
        );
        setMyfetch(response.data);
      };

      


  return (
    <div className="Container">
      <form onSubmit={fetchWeather}>
          <input placeholder="Your city" onChange={(e) => updateCity(e.target.value)} />
          <button type="submit"><img src="icons/search.svg" /></button>
      </form>
      {myfetch ? (
        <Response cInfo={myfetch.clouds.all} hInfo={myfetch.main.humidity} wInfo={myfetch.wind.speed} pInfo={myfetch.main.pressure} city={myfetch.name} country={myfetch.sys.country} temp={myfetch.main.temp} desc={myfetch.weather[0].main} icon={myfetch.weather[0].icon} />
      ) :(
        <Home />
      )
      }
    </div>
  );
}

export default App;

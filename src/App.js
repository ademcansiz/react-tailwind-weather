import React from 'react'
import { useState,useEffect } from "react";
import Weather from "./components/Weather";
import City from "./components/City";
import axios from "axios";

function App() {
  const [activeComponent, setActiveComponent] = useState();
  const [city, setCity] =  useState();
  const [weather , setWeather] = useState();
 
  const getWeatherData = async (city) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=f5576917f00e5df7473c0a7790d5c17e&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Veri alinirken bir hata oluştu...");
    }
  };

  useEffect(() => {
    city && getWeatherData(city) 
  }, [city]);
  
  return (
    <div className="h-full">
     {
     activeComponent == null ? <Weather city={city} setCity={setCity} setActiveComponent={setActiveComponent} >
     </Weather> :  <City weather={weather} setActiveComponent={setActiveComponent}></City>
     }   
    </div>
  );
}

export default App;

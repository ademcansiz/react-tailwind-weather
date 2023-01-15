import { useState,useEffect } from "react";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [weather , setWeather] = useState();
  const city = "istanbul"
 
  const getWeatherData = async (city) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Veri alinirken hata olustu.");
    }
  };

  useEffect(() => {
    return (    
      getWeatherData(city)
    )
  }, []);

  return (
    <div className="bg-neutral-800 h-full">
      <Weather weather={weather}></Weather>
    </div>
  );
}

export default App;

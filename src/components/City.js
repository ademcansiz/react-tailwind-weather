import React from 'react'
function City({weather,setActiveComponent}) {
  if (!weather) {
    return <p>Yükleniyor...</p>
  }
  return (
    <div className= 'bg-red-900 text-center w-full text-5xl'>
      {weather.name}
      <br></br>    
      <h3>{weather.name}</h3>
      <h3>{weather.weather.map((data)=> data.description).join(", ")}</h3>
      <h3>{weather.main.temp} C</h3>
      <h3>{new Date(weather.dt * 1000).toLocaleDateString()}</h3>
      <h3>{weather.main.feels_like}hissedilen</h3>
      <h3>{weather.main.humidity}nem</h3>
      <h3>{weather.wind.speed}rüzgar</h3>
      <br></br>
      
      <button onClick={()=>(setActiveComponent(null))}>KAPAT</button>
  
    </div>
  )
}

export default City

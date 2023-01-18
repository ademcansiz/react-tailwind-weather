import React from 'react'
function City({weather,setActiveComponent}) {
  if (!weather) {
    return <p>Yükleniyor...</p>
  }
  return (
   
   <div className='relative'>
      <button className='relative z-10 m-2 text-white  border-white border-2 rounded-md px-8 py-1 hover:bg-[#0990FF]' onClick={()=>(setActiveComponent(null))}>Geri</button> 
      <div className="absolute h-screen w-full flex justify-center items-center top-0">
        <div className=' h-[80%] w-[80%]  flex shadow-2xl rounded-sm '>
                {/* sol */}
              <div className='flex w-full h-full weather-img items-end pb-12 pl-24 gap-x-4'>           
              {/* <h1 className='  text-white font-bold text-7xl'>{weather.main.temp}°</h1> */}
              <h2 className=' text-white font-bold text-6xl'>{weather.name}</h2>
              </div>
                {/* sol bitiş */}

                {/* sağ */}
                <div className='flex flex-col w-2/4 h-full bg-gradient-to-r from-cyan-500 to-blue-400 text-white'>
                <div className=' h-[35%] text-2xl'>
                  <h3 className='flex justify-center items-center h-full w-full text-5xl font-bold'>{weather.main.temp} °C</h3>
                </div>
                <div className='h-1/6'>
                  <h3 className='flex justify-center items-center h-full w-full text-3xl capitalize'> Hissedilen : {weather.main.feels_like}°C</h3>
                </div>

                <div className=' h-1/6'>
                  <h3 className='flex justify-center items-center h-full w-full text-3xl capitalize'>Nem Oranı : %{weather.main.humidity}</h3>
                </div>

                <div className=' h-1/6'>
                  <h3 className='flex justify-center items-center h-full w-full text-3xl capitalize'> Rüzgar : {weather.wind.speed}</h3>
                </div>

                <div className=' h-1/6'>
                  <h3 className='flex justify-center items-center h-full w-full text-3xl capitalize'>{new Date(weather.dt * 1000).toLocaleDateString()}</h3>
                </div>
              
              </div>
          {/* sağ bitiş*/}
   </div>
 
   </div>
   </div>
  )
}

export default City

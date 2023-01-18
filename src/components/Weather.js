import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {useState} from 'react';



function Weather({city,setCity,setActiveComponent}) {
    const iller =['Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
    'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
    'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 
    'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 
    'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
    'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
    'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
    'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce']
    
    const [value, setValue] =new useState(iller);
    const onChange = (event)=>{
        const query = event.target.value;
        var updatedList = [...iller];
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
          });
        setValue(updatedList);
    }

  return (
    <Router>
    <h1 className='text-5xl font-bold text-white text-center pt-8 pb-12'>Hava Durumu</h1>
    <div className='flex justify-center items-center mb-8 mt-4 '>
    <input className=' w-[40%] py-2 px-4 rounded-md' placeholder='search' name='search' onChange={onChange}></input>
    </div>
    <div className='flex items-center justify-center flex-wrap gap-x-4 '>
    {value.map((item, index) => (
        <button key={index} onClick={()=>(setCity(value[index]))}>
          <a onClick={()=>(setActiveComponent(city))} className='text-center flex gap-x-4 border-white border-2 m-4 text-xl text-white p-4 w-64 rounded-md' key={index}>                
            {item}
          </a>
        </button>
      ))}      
    </div>
</Router>
  )
}

export default Weather

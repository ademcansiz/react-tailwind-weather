import {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import {useFormik} from 'formik';

function Weather({weather}) {
    // if (!weather) {
    //   return  <p>Yükleniyor...</p>
    // }

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
    const onClick = ()=>{
        alert(value.indexOf())
    }
  return (
    <div>
        <h1 className='text-5xl font-bold text-white text-center pt-8 pb-12'>Hava Durumu</h1>
        <div className='flex justify-center items-center mb-8 mt-4 '>
        <input className=' w-[40%] py-2 px-4 rounded-md' placeholder='search' name='search' onChange={onChange}></input>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-x-4 '>
        {console.log(value)}
        {value.map((item, index) => (
            <button onClick={()=>alert(value.indexOf(item.value))} className='flex gap-x-4 bg-neutral-500 m-4 text-xl text-white p-4 w-64 rounded-md' key={index}>                
               {item}
            </button>
          ))}
        </div>

      {/* <h3>{weather.name}</h3>
      <h3>{weather.weather.map((data)=> data.description).join(", ")}</h3>
      <h3>{weather.main.temp} C</h3>
      <h3>{new Date(weather.dt * 1000).toLocaleDateString()}</h3>
      <h3>{weather.main.feels_like}hissedilen</h3>
      <h3>{weather.main.humidity}nem</h3>
      <h3>{weather.wind.speed}rüzgar</h3> */}
    </div>
  )
}

export default Weather

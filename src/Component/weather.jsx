import React from 'react'
import './weather.css'

import search_icon from "../Component/Assest/sea.png";
import w3_icon from "../Component/Assest/temp.png";
import w4_icon from "../Component/Assest/humi.png"; 
import ww_icon from "../Component/Assest/wind.png";

function weather() {

    let api_key ="ec825ef0e8bb34a1d259d3d0476302ad";

    const search = async () => {
           const element =document.getElementsByClassName("cityInput")
           if(element[0].value==="")
           {
            return 0;
           }

           let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
           
           let responce = await fetch(url);
           let data = await responce.json();

           const humidity = document.getElementsByClassName("humidity-percentage")
           const Wind = document.getElementsByClassName("wind-rate")
           const temprature = document.getElementsByClassName("weather-temp")
           const location = document.getElementsByClassName ("weather-location")
          
          humidity[0].innerHTML = data.main.humidity;
          Wind[0].innerHTML = data.wind.speed;
          temprature[0].innerHTML = data.main.temp;
          location[0].innerHTML = data.name;

          sunrise[0].innerHTML = data.sys.sunrise;
          sunset[0].innerHTML = data.sys.sunset;
          feelslike[0].innerHTML = data.main.feelslike;
          }
   
           return (
    <div className='container'>
      <div className="top-bar">

        <input type='text' className='cityInput' 
          placeholder='Search' />

        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={w3_icon} alt="" />

      </div>

      <div className="weather-temp">
        24°
        </div>

      <div className="weather-location">
        INDIA
      </div>

      <div className="div data-container">
        <div className="element">
            <img src={w4_icon} alt="" className="icon" />

            <div className="data">
              <div className="humidity-percentage">
                64%
              </div>

              <div className="text">
              humidity
              </div>
            </div>

            <div className="element">
            <img src={ww_icon} alt="" className="icon" />

            <div className="data">
              <div className="wind-rate">
                18km
              </div>
            <div className="text">
                Wind Speed
              </div>
            </div>

            
        </div>

        </div>
      </div>

    </div>
  )
}

export default weather
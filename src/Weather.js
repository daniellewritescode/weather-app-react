import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
//import Loader from "react-loader-spinner";
import "./style.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [result, setResult]= useState({ready:false})
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
   
    setCity(event.target.value);
    setCity(`${city}`);
    let apiKey = "f221ad1bc52d44e22fdecebbd007fb29";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
    function handleResponse(response) {
      //console.log(response);
      setResult({ready:true});
      setCity(response.data.name);
      setTemp(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setIcon(response.data.weather[0].icon);
    }
  

  if (result.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a City i.e. Miami"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
          <br />
        </form>

        <div class="row">
        <div class="col hstack">        
          <div class="col vstack">
          <div class="cityName" id="cityChange">{city}</div>
          <div class="cityTemp"><span class="cityTempn">{temp}°F.</span></div>
          </div>
          <div class="col cityCondition">Description: {description}<br />
          Humidity: {humidity}% <br />
          Wind: {wind}mph<br />
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
            width="42"
          /> 
          <div class="cityCondition">   
          </div></div></div></div>
          <div class="row">
        <div class="col">&nbsp; column no name</div>
      </div>
        <WeatherForecast />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a City i.e. Miami"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
          <br />
        </form>
        {/* <Loader type="TailSpin" color="#7e7b7d" height={20} width={20} /> */}
      </div>
    );
  }
}

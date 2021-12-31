import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
export default function Weather(props) {
  let [city, setCity] = useState(null);
  let [temp, setTemp] = useState(null);
  let [result, setResult] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setResult(`${city}`);
    let apiKey = "f221ad1bc52d44e22fdecebbd007fb29";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response) {
      //console.log(response);
      setCity(response.data.name);
      setTemp(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setIcon(response.data.weather[0].icon);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (temp) {
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
        <h3>
          City: {city}
          <br />
          Temp: {temp}°C. <br />
          Description: {description}
          <br />
          Humidity: {humidity} <br />
          Wind: {wind}
          <br />
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
            width="42"
          />
        </h3>
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
        <h2>Loading...</h2>
        <Loader type="TailSpin" color="#7e7b7d" height={40} width={40} />
      </div>
    );
  }
}

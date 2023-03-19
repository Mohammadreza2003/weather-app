import React, { useState } from 'react';
import axios from "axios"
import './Weather.css';
import React from 'react';
import { useSelector } from 'react-redux';
import  dark  from '../them/dark';
import light  from '../them/light';
const Weather = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoding] = useState(false);
  const theme = useSelector(state => state.theme);
  const themeStyles = theme === 'light' ? light : dark;

  const changeHandler = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const clickHandler = (event) => {
    event.preventDefault();
    if (name === "") {
      alert("write something");
    }
    setIsLoding(true);
    setData(null);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7e4dc5d9621c65a85ad1f36c13575bb9&units=metric`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.response.data.cod);
      })
      .finally(() => {
        setIsLoding(false)
      })
  }


  return (
    <div style={themeStyles}>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Weather App</h1>
          <form>
            <input type="text" placeholder="Search for a city" onChange={changeHandler} />
            <button onClick={clickHandler}>Search</button>
            {!!isLoading && <h1 className="load">Loading....</h1>}
            <span className="msg">
              {
                error === "404" && <p>City not found !!!</p>
              }
            </span>
          </form>
        </div>
      </section>
      {
        data !== null &&
        <section className="data-section">
          <div className="container">
            <ul className="citys">
              <li className="city">
                <h1 className="city-name">{data !== null && <p>{data.name} {data.sys.country}</p>}</h1>
                <div className="city-temp">{data !== null && <h1>{Math.floor(data.main.temp)}</h1>}</div>
                <figure>
                  <img className="city-icon" src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`} alt="city" />
                  <p>{data.weather[0]["description"]}</p>
                </figure>
              </li>
            </ul>
          </div>
        </section>

      }
    </div>

  );
};


export default Weather;
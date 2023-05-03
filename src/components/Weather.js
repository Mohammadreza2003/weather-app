import React, { useState,useContext } from "react";
import axios from "axios";
import "./Weather.css";
import "../theme/Darkmode.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { themeContext } from "../App";
const Weather = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoding] = useState(false);
  const theme = useContext(themeContext)
  const [currentDarkMode, setCurrentDarkMode] = useState(theme.darkMode);
  const handleChange = (event) => {
    setCurrentDarkMode(event.target.value);
  };
  const changeHandler = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    if (name === "") {
      alert("write something");
      return;
    }
    setIsLoding(true);
    setData(null);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7e4dc5d9621c65a85ad1f36c13575bb9&units=metric`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.response.data.cod);
      })
      .finally(() => {
        setIsLoding(false);
      });

  };

  return (
    <div className={("main-container ") + (theme.darkMode === "dark" ? " main-container-dark" : " ")}>
       <Link className={("icon-setting") + (theme.darkMode === "dark" ? " icon-setting-dark" : " ")}to="/settings">
          <p className={("text-setting") + (theme.darkMode === "dark" ? " text-setting-dark" : " ")}>Setting</p>
          <FontAwesomeIcon icon={faCog} className={"faCog"} />
        </Link>
      <section className={("top-banner ") + (theme.darkMode === "dark" ? " top-banner-dark" : " ")}>
        <div className={"container"}>
          <h1 className="heading">Weather App</h1>
          <form>
            <input
              type="text"
              placeholder="Search for a city"
              onChange={changeHandler}
              className={("top-banner-form-input ")  + (theme.darkMode === "dark" ? " top-banner-dark-form-input" : " ")}
            />
            <button onClick={clickHandler} className={("top-banner-form-button ")  + (theme.darkMode === "dark" ? " top-banner-dark-form-button" : " ")}>Search</button>
            {!!isLoading && <h1 className={("load ")  + (theme.darkMode === "dark" ? " load-dark" : " ")}>Loading....</h1>}
            <span className={("msg ")  + (theme.darkMode === "dark" ? " msg-dark" : " ")}>
              {error === "404" && <p>City not found !!!</p>}
            </span>
          </form>
        </div>
      </section>
      {data !== null && (
        <section className={("data-section ")  + (theme.darkMode === "dark" ? " data-section-dark" : " ")}>
          <div className="container">
            <ul className="citys">
              <li className={("city ") + (theme.darkMode === "dark" ? " city-dark" : " ")}>
                <h1 className="city-name">
                  {data !== null && (
                    <p>
                      {data.name} {data.sys.country}
                    </p>
                  )}
                </h1>
                <div className={("city-temp ") + (theme.darkMode === "dark" ? " city-temp-dark" : " ")}>
                  {data !== null && <h1>{Math.floor(data.main.temp)}</h1>}
                </div>
                <figure>
                  <img
                    className={("city-icon ") + (theme.darkMode === "dark" ? " city-icon-dark" : " ")}
                    src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`}
                    alt="city"
                  />
                  <p>{data.weather[0]["description"]}</p>
                </figure>
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default Weather;

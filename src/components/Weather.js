import React, { useState, useContext } from "react";
import axios from "axios";
import "./Weather.css";
import "../theme/Darkmode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { themeContext } from "../App";
import { ReactSVG } from "react-svg";
import { useSelector, useDispatch } from "react-redux";
import { increase} from "../redux/settings/settingActions";
const Weather = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoding] = useState(false);
  const theme = useContext(themeContext);
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
    setError(null);
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

  const counter = useSelector((state) => state.counter.counter);
  const counterDispatch = useDispatch();

  const themee = useSelector ((state)=> state.counter.theme);

  return (
    <div
      className={
        "main-container " +
        (themee === "dark" ? " main-container-dark" : " ")
      }
    >
      <h1>Counters - {counter}</h1>
      <button onClick={() => counterDispatch(increase())} style={{backgroundColor:"salmon",border:"5px solid salmon",fontSize:"30px",borderRadius:"5px"}}>Increase</button>
      <Link
        className={
          "icon-setting" +
          // (theme.darkMode === "dark" ? " icon-setting-dark" : " ")
          (themee === "dark" ? " icon-setting-dark" : " ")
        }
        to="/settings"
      >
        <p
          className={
            "text-setting" +
            (themee === "dark" ? " text-setting-dark" : " ")
          }
        >
          Setting
        </p>
        <FontAwesomeIcon icon={faCog} className={"faCog"} />
      </Link>
      <section
        className={
          "top-banner " + (themee === "dark" ? " top-banner-dark" : " ")
        }
      >
        <div className={"container"}>
          <h1 className="heading">Weather App</h1>
          <form>
            <input
              type="text"
              placeholder="Search for a city"
              onChange={changeHandler}
              className={
                "top-banner-form-input " +
                (themee === "dark"
                  ? " top-banner-dark-form-input"
                  : " ")
              }
            />
            <button
              onClick={clickHandler}
              className={
                "top-banner-form-button " +
                (themee === "dark"
                  ? " top-banner-dark-form-button"
                  : " ")
              }
            >
              Search
            </button>
            {!!isLoading && (
              <h1
                className={
                  "load " + (themee === "dark" ? " load-dark" : " ")
                }
              >
                Loading....
              </h1>
            )}
            <span
              className={
                "msg " + (themee === "dark" ? " msg-dark" : " ")
              }
            >
              {error === "404" && <p>City not found !!!</p>}
            </span>
          </form>
        </div>
      </section>
      {data !== null && (
        <section
          className={
            "data-section " +
            (themee === "dark" ? " data-section-dark" : " ")
          }
        >
          <div className="container">
            <ul className="citys">
              <li
                className={
                  "city " + (themee === "dark" ? " city-dark" : " ")
                }
              >
                <h1 className="city-name">
                  {data !== null && (
                    <p>
                      {data.name} {data.sys.country}
                    </p>
                  )}
                </h1>
                <div
                  className={
                    "city-temp " +
                    (themee === "dark" ? " city-temp-dark" : " ")
                  }
                >
                  {data !== null && <h1>{Math.floor(data.main.temp)}</h1>}
                </div>
                <figure>
                  <ReactSVG
                    className={
                      "city-icon " +
                      (themee === "dark" ? " city-icon-dark" : " ")
                    }
                    src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`}
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

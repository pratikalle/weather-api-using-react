import React from "react";
import "./displayweather.css";

function DisplayWeather(props) {
  //console.log("props", props);
  const {data} = props;
  const iconurl = "https://openweathermap.org/img/wn/"+`${data.cod !== 404 ? data.weather[0].icon : null}`+ ".png";

  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name}, {data.sys.country}. Weather
            </span>
            <span className="cardsubtitle">
              {new Date().toLocaleTimeString()}
            </span>
            <h1>{Math.floor(data.main.temp - 273.15)}<sup>o</sup></h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <img src={iconurl} className="weather-icon" alt="" />
          </div>

          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tr>
              {/* add humidity and other things in html table after checking the data through console*/}
                </tr>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard"> 
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  )
}

export default DisplayWeather;

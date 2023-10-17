import React, {useState} from "react";
import "./weather.css";
import DisplayWeather from "./DisplayWeather";

//https://openweathermap.org/current#name -- url for weather api

function Weather() {

  const apikey = "4e7cc393e29ffc9e6ecf2a4df832434d";

  const [form, setForm] = useState({
    city: "",
    country: ""
  })

  const [weather, setWeather] = useState([])

  async function weatherData(e){
    e.preventDefault();

    if(form.city == ''){
      alert('First provide all the required fields');
    }else{
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${apikey}`).then(res => res.json()).then((data) => data);

      setWeather(
        {
          data : data
        }
      );
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if(name == 'city'){
      setForm({...form, city:value})
    }else{
      setForm({...form, country:value})
    }

  }

  return <div className="weather">
    <span className="title">
      Weather App
    </span>
    <br/>

    <form>
      <input type="text" name="city" onChange={e => handleChange(e)} placeholder="Enter City"/>
      &nbsp; &nbsp;
      <input type="text" name="country" onChange={e => handleChange(e)} placeholder="Enter Country"/>
      <button className="getweather" onClick={(e) => weatherData(e)}>Submit</button>
    </form>

    {weather.data != undefined ? (
      <div><DisplayWeather data={weather.data} />
      </div>
      ) : null}
  </div>
}

export default Weather;
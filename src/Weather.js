import axios from 'axios';
import React, { Component } from 'react';

export default class WeatherList extends Component {
  getWeatherData = async () => {
    let link =
      'http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=463063f5c0062117c2dc359860ce63ab&units=metric';
    let i = '';
    try {
      await axios.get(link).then((res) => {
        document.getElementById(
          'temp'
        ).innerText = `Temperature: ${res.data.main.temp}℃, City: ${res.data.name}`;
        i = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
      });
    } catch (err) {
      console.error(err);
    }

    try {
      await axios.get(i).then((res) => {
        document.getElementById('item').src = i;
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <div>LabTest 2 FullStack</div>
        <div>
        <h1>James Solomon - 101283673</h1>
          <button
            type="button"
            class="btn btn-warning"
            onClick={this.getWeatherData}
          >
            Display Weather
          </button>
          <img id="item" src="" alt=""></img>
          <p id="temp"></p>
        </div>
      </div>
    );
  }
}

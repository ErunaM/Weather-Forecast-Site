import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    //also same as const {lat, lon} = cityData.city.coord;

    console.log(temps);

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /> </td>
        <td>   <Chart color="red" data={temps} type="Kelvin: "/> </td>
        <td>    <Chart color="blue" data={pressure} type="HPA: " /> </td>
        <td>

        <Chart color="yellow" data={humid} type="Percent: "/>
      </td>
      </tr>
    );

  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature </th>
            <th> Pressure </th>
            <th> Humidity </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  return { weather };// { weather } == {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);

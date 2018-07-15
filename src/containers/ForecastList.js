import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class ForecastList extends Component {

    //this is taking a city data object out of the mapped array
    //in reducer we used action.payload.data to get us into that part of the object
    renderWeather(cityData) {

        const name = cityData.city.name;
        const temps = cityData.list.map(weather=> 1.8*(weather.main.temp) - 459.67);
        const pressures = cityData.list.map(weather=> weather.main.pressure);
        const humidities = cityData.list.map(weather=> weather.main.humidity);
        // console.log(temps);
        const {lat, lon} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>
                    <Chart color="orange" data={temps} units="&#8457;"/>
                </td>
                <td>
                    <Chart color="green" data={pressures} units="hPa"/>
                </td>
                <td>
                    <Chart color="black" data={humidities} units="%"/>
                </td>
            </tr>
        );
    }

  render() {
      //this is our state array of city data objects
      const {weather} = this.props;
    //   console.log('weather is', weather);
    return (
      <table className="table table-hover">
          <thead>
              <tr>
                  <th>City</th>
                  <th>Temperature (&#8457;)</th>
                  <th>Pressure (hPa)</th>
                  <th>Humidity (%)</th>
              </tr>
          </thead>
          <tbody>
              {/* take each city data object and map over it */}
              {weather.map(this.renderWeather)}
          </tbody>
      </table>
    )
  }
}

//state.weather.weather?
const mapStateToProps = state => ({
    weather: state.weather
});

export default connect(mapStateToProps)(ForecastList);

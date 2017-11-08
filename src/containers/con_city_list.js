import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class CityList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {showErrorMessage: 0};
  }

  renderCity(cityData){
  	if(_.has(cityData, "notFound")){
		return;
    // return <tr key ={"1233456577899034534543"}><td><div><h1>Sorry, We Could Not Found The City You Entered</h1></div></td></tr>;
  	}
  	const cityName = cityData.city.name;
  	const currentForcast = cityData.list[0].main;
  	const temps = cityData.list.map(weather => weather.main.temp);
  	const tempavg = _.round(_.sum(temps)/temps.length);
  	// console.log(tempavg);
  	const pressures = cityData.list.map(weather => weather.main.pressure);
  	const pressureavg = _.round(_.sum(pressures)/pressures.length);
  	const humidities = cityData.list.map(weather => weather.main.humidity);
  	const humidityavg = _.round(_.sum(humidities)/humidities.length);

    const {lat, lon} = cityData.city.coord;


  	return(
  		<tr key={cityName}>
  			<td>
  				<GoogleMap lat={lat} lon={lon} />
  			</td>
  			<td>
  				<Chart data={temps} color={"red"} />
  				<div>
  					<p>Current Temp: {currentForcast.temp} &deg;C</p>
  					<p>Avg. Temp: {tempavg} &deg;C</p>
  				</div>
  			</td>
  			<td>
  				<Chart data={pressures} color={"green"} />
  				<div>
  					<p>Current Pressure: {currentForcast.pressure} kPa</p>
  					<p>Avg. Pressure: {pressureavg} kPa</p>
  				</div>
  			</td>
  			<td>
  				<Chart data={humidities} color={"blue"} />
  				<div>
  					<p>Current Humidity: {currentForcast.humidity}%</p>
  					<p>Avg. Humidity: {humidityavg}%</p>
  				</div>
  			</td>
  		</tr>
  	);
  }

  render() {
  	// console.log(this.props);
  	if(!this.props.weather.length){
  		return <div><h1>Enter A Bangledeshi City Name To Get A Sense Of How The Next Five Days Will Turn Out</h1></div>;
  	}

    return (
    	<div className="row">
    		<div className="col s12">
	      		<table className="centered bordered responsive-table highlight">
	      			<thead>
	      				<tr>
	      					<th> City </th>
						  	<th> Temp </th>
	      					<th> Pressure </th>
	      					<th> Humidity </th>	      					
	      				</tr>
	      			</thead>
	      			<tbody>
	      				{this.props.weather.map((cityData) => this.renderCity(cityData))}
	      			</tbody>	
	      		</table>
	      	</div>
     	</div>
    );
  }
}

function mapStateToProps({weather}){
	return {weather};
	// return {};
}

export default connect(mapStateToProps, null)(CityList);

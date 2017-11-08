import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {bindActionCreators} from 'redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import {hideErrorMessage} from '../actions/index';


class CityList extends React.Component {

  constructor(props) {
    super(props);
  }

  renderCity(cityData){
  	if(_.has(cityData, "notFound")){
  		return;
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

  renderCityNotFound(){
    let cityNotFoundDiv = null;
    if(this.props.cityNotFound && this.props.handleErrorMessage){
      cityNotFoundDiv = (
        <div className="col m12">
          <div className="card-panel teal" id="cardPanel" >
            <a onClick={() => this.props.hideErrorMessage()} className="btn-floating"><i className="material-icons">X</i></a>
            <p className="red-text text-darken-4">Sorry, We Could Not Find The City You Entered!
            <br />
            Please, Make Sure You Spelled It Correctly And It's A Bangladeshi City.
            </p>
          </div>
        </div>
      );
    }
    return cityNotFoundDiv;
  }

  render() {
  	// console.log(this.props);
    const cityNotFoundDiv = this.renderCityNotFound();

    if(!this.props.weather.length){
      return (
        <div>
          <div className="row">
            {cityNotFoundDiv}
          </div>
          <div className="row">
            <div className="col m12">
              <div className="card-panel teal" >
                <h1>Enter A Bangledeshi City Name To Get A Glance Of How The Next Five Days Will Turn Out</h1>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // console.log(this.props, cityNotFoundDiv);
    
    return (
    	<div className="row">
        {cityNotFoundDiv}
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

function mapStateToProps({weather, cityNotFound, handleErrorMessage}){
	return {weather, cityNotFound, handleErrorMessage};
	// return {};
}

function mapActionToProps(dispatch){
  return bindActionCreators({hideErrorMessage}, dispatch);
}

export default connect(mapStateToProps, mapActionToProps)(CityList);

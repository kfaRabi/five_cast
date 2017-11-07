import React from 'react';
import {connect} from 'react-redux';

class CityList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="row">
    		<div className="col m12">
	      		<table className="centered bordered responsive-table highlight">
	      			<thead>
	      				<tr>
	      					<th> City </th>
	      					<th> Temp </th>
	      					<th> Pressure </th>
	      					<th> Humidity </th>
	      				</tr>
	      			</thead>
	      		</table>
	      	</div>
     	</div>
    );
  }
}

function mapStateToProps({reduxState}){
	// return {weather: reduxState.weather};
	return {};
}

export default connect(mapStateToProps, null)(CityList);

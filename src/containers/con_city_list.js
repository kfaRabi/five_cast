import React from 'react';
import {connect} from 'react-redux';

class CityList extends React.Component {

  constructor(props) {
    super(props);
  }

  // <th> Temp </th>
	 //      					<th> Pressure </th>
	 //      					<th> Humidity </th>
  render() {
  	console.log(this.props);
  	if(!this.props.weather.length){
  		return <div>Wait....</div>;
  	}
    return (
    	<div className="row">
    		<div className="col m12">
	      		<table className="centered bordered responsive-table highlight">
	      			<thead>
	      				<tr>
	      					<th> City </th>
	      					
	      				</tr>
	      			</thead>
	      			<tbody>
	      				{
	      					this.props.weather.map(
	      						ct => {return <tr><td> {ct}</td></tr>}
	      					)
	      				}
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

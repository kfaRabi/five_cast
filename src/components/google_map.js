import React from 'react';

export default class GoogleMap extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  	new google.maps.Map(
  		this.refs.mapDiv, {
  			zoom: 12,
  			center: {
  				lat: this.props.lat,
  				lng: this.props.lon,
  			}
  		}
  	);
  }

  render() {
    return (
      <div ref="mapDiv"></div>
    );
  }
}

import React from 'react';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {city: ''};
  }

  onInputChange(e){
  	var city = e.target.value;
  	
  	this.setState({
  		city
  	});
  }

  onFormSubmit(e){
  	e.preventDefault();
  	this.setState({
  		city: '' 
  	});
  }

  render() {
    return (
      <div className="row">
      	<form className="col m12" onSubmit={e => this.onFormSubmit(e)}>
      		<div className="row">
	      		<div className="input-field col m10">
	      			<input
	      				onChange={event => this.onInputChange(event)}
	      				value={this.state.city}
	      				placeholder="Enter a Bangladeshi city to see forcast"
	      			/>
	      		</div>
	      		<div className="input-field col m2">
	      			<button className="btn waves-effect waves-light">Search</button>
	      		</div>
      		</div>
      	</form>
      </div>
    );
  }
}

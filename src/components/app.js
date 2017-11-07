import React, { Component } from 'react';
import SearchBar from '../containers/con_search_bar';
import CityList from '../containers/con_city_list';

export default class App extends Component {
  
  render() {
  
    return (
    	<div>
  			<SearchBar />
  			<CityList />
    	</div>
    );
  }
}

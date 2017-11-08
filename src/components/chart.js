import React from 'react';
import {Sparklines, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';

export default class Chart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<Sparklines width={180} height={120} data={this.props.data}>
      		<SparklinesBars style={{ fill: this.props.color }} />
      	  <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </div>
    );
  }
}

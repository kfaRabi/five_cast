import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default class Chart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<Sparklines width={180} height={120} data={this.props.data}>
      		<SparklinesLine color={this.props.color} />
      	</Sparklines>
      </div>
    );
  }
}

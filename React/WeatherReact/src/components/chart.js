import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import './chart.css';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={80} width={140} data = {props.data}>
          <SparklinesLine color = {props.color}/>
          <SparklinesReferenceLine type = "avg"/>
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  )
}
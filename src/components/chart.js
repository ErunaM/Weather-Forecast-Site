import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
function  average(data){
    return  _.round(_.sum(data)/data.length);
  }

  return (
    <div>

        <Sparklines svgHeight={80} svgWidth={180}  data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{props.type}{average(props.data)}</div>

    </div>
  );
}

import React, { Component } from 'react';
import styles from "./Graph.scss";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend  } from 'recharts';
import { connect } from "react-redux";


 export default class Graph extends React.Component {

   render() {
     console.log(this.props.graph);
      return (
        <div className = "graphDiv">

            <LineChart className = "theGraph" width={400} height={200} data={this.props.graph}>

              <Line type="monotone" dataKey="price" stroke="#8884d8" />
              <CartesianGrid stroke ="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
            </LineChart>
        </div>
      );
   }
}

// export default connect(mapStateToProps)(Graph);

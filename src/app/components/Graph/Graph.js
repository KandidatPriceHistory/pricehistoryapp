import React, { Component } from 'react';
import styles from "./Graph.scss";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend  } from 'recharts';
//import { loadGraph } from '../../actions/index';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { graph: state.graph };
};


 class Graph extends React.Component {

   render() {
     console.log(this.props.graph);
      return (
        <div className = "graphDiv">

            <LineChart className = "theGraph" width={400} height={400} data={this.props.graph} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

              <Line type="monotone" dataKey="price" stroke="#8884d8" />
              <CartesianGrid stroke ="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
            </LineChart>
        </div>
      );
   }
}

export default connect(mapStateToProps)(Graph);

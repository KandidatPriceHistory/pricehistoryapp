import React, { Component } from 'react';
import styles from "./Graph.scss";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend  } from 'recharts';
import { connect } from "react-redux";


 export default class Graph extends React.Component {

   render() {
      return (
        <div className = "graphDiv">
        <LineChart className = "theGraph" width={500} height={250} data={graphDates}>
            <Line type="monotone" dataKey="price" stroke="#207A88" />
              <CartesianGrid stroke ="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
            </LineChart>
        </div>
      );
   }
}

import React, { Component } from 'react';
import styles from "./Graph.scss";
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { connect } from "react-redux";

 export default class Graph extends React.Component {

   render() {
      return (
        <div className = "graphDiv">
            <ResponsiveContainer width='100%' height={200}>
              <LineChart className = "theGraph" data={this.props.graph}>
                <Line type="monotone" dataKey="price" stroke="#207A88"/>
                <CartesianGrid stroke ="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
        </div>
      );
   }
}

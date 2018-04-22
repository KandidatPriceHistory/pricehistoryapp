import React, { Component } from 'react';
import styles from "./Graph.scss";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend  } from 'recharts';



export default class Graph extends Component {
  constructor(props){
    //properties that you can pass in components
    super(props);
    this.state = {
      data:[
      {name: 'Nov', uv: 4000},
      {name: 'Dec', uv: 4000},
      {name: 'Jan', uv: 5030},
      {name: 'Feb', uv: 2780},
      {name: 'Mar', uv: 1890},
      {name: 'Apr', uv: 50},
      {name: 'Maj', uv: 3490}
    ],
    }
  }


   render() {
      return (
        <div className = "graphDiv">
        <h4 id= "temporaryGraphTitle "> This is the Graph component! </h4>
        <LineChart width={400} height={400} data={this.state.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke ="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
         <Tooltip />
        </LineChart>
        </div>
      );
   }
}

import React, { Component } from 'react';
import styles from "./Graph.scss";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend  } from 'recharts';

const mapStateToProps = state => {
  return { graph: state.graph };
};


export default class Graph extends Component {
  constructor(props){
    //properties that you can pass in components
    super(props);
    this.state = {
      data:[
      {name: 'Nov', price: 4000},
      {name: 'Dec', price: 4000},
      {name: 'Jan', price: 5030},
      {name: 'Feb', price: 2780},
      {name: 'Mar', price: 1890},
      {name: 'Apr', price: 50},
      {name: 'Maj', price: 3490}
    ],
    }
  }


   render() {
      return (
        <div className = "graphDiv">
          <h4 id= "temporaryGraphTitle "> This is the Graph component! </h4>
            <LineChart width={400} height={400} data={this.state.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
              <CartesianGrid stroke ="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
        </div>
      );
   }
}

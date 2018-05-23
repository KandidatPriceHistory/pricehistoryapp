import React, { Component } from 'react';
import styles from "./Graph.scss";
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { connect } from "react-redux";

 export default class Graph extends React.Component {

   render() {
     const graphData = sortDates(this.props.graph);
      return (
        <div className = "graphDiv">

            <ResponsiveContainer width='100%' height={200}>
              <LineChart className = "theGraph" data={graphData}>
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

function sortDates(graphData) {
  const arrayOfDates = []
  const graphDataSorted = []
  let lastDate = ""
  graphData.map( el => {
    const eachDate = el.updatedAt.slice(0,10).split('-').join('');
    arrayOfDates.push(eachDate)
  })
  const sortedArray = arrayOfDates.sort(function(a,b) {
    return a > b ? 1 : a < b ? -1 : 0;
  })
  sortedArray.forEach(sortedDate => {
    graphData.forEach(data => {
      const date = data.updatedAt.slice(0,10).split('-').join('');
      if (sortedDate === date && sortedDate != lastDate) {
        const obj = { "price": data.price, "date":date }
        graphDataSorted.push(obj)
        lastDate = sortedDate;
      }
    })
  })
  return graphDataSorted
}

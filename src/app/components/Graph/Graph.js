import React, { Component } from 'react';
import styles from "./Graph.scss";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend  } from 'recharts';
import { connect } from "react-redux";


 export default class Graph extends React.Component {

   componentWillMount(){
     var graphDates = this.props.graph;
     sortGraphDates(graphDates);
     //console.log("COMPONENT WILL MOUNT", graphDates);
   };

   render(graphDates) {
     console.log("INSIDE RENDER",graphDates);
     /*
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
      */
   }
}


function sortGraphDates(graphDates){
  console.log("INSIDE SORT FUNCTION");
  graphDates.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});
  //for (i=0; i<length.graphData;i++){
    //var date = graphData[i].date;
    //var slicedDate=date.slice(0,9);
    //slicedDate= slicedDate.split('-').join('');
    //slicedDate = parseInt(slicedDate);

  //};
  return console.log("SORTERAD:",graphDates,"!!!!!!!!!!");
 };

 /*  graphDates.sort(function(a,b){
     return a.data.date.getTime() - b.data.date.getTime()
   });*/


//array.sort(function(a,b){return a.data.date.getTime() - b.data.date.getTime()});

//gör get req till pricehistory i postman så kan

// export default connect(mapStateToProps)(Graph);

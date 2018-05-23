import React, { Component } from 'react';
import styles from "./Factbox.scss";

export default class Factbox extends React.Component {
   render() {
     const currentProduct = this.props.product;
     const currentRetailer = this.props.retailers;
     console.log("RETAILERS IN FACTBOX",currentRetailer);
     //const minMaxPrice = getMinMax(this.props.pricehistory);
     //const minPrice = getMin(this.props.pricehistory);
     //const maxPrice = getMax(this.props.pricehistory);
     console.log("RETAILER:", currentRetailer.retailerName );
     console.log("PRODUCT:", currentProduct.name);

      return (
        <div className = "factboxDiv">
        <h2 className= "factsHeadline"> Facts about {currentProduct.name} </h2>


        </div>
      );
   }
}

// Kanske såhär är snyggare
function getMinMax(pricehistoryObj){
  const arrayMinMax = []
  const arrayPrices  =[]
  pricehistoryObj.map(el=> {
    const eachPrice = el.price;
    arrayPrices.push(eachPrice);
    //ta bort ----
    const test = 29000;
    arrayPrices.push(test);
    //--------------
  });

  var maxPrice = Math.max.apply(Math, arrayPrices);
  arrayMinMax.push(maxPrice);
  var minPrice = Math.min.apply(Math, arrayPrices);
  arrayMinMax.push(minPrice);
  return arrayMinMax;
};

//-----------------------------------------------------

function getMin(pricehistoryObj){
  const arrayPrices  =[]
  pricehistoryObj.map(el=> {
    const eachPrice = el.price;
    arrayPrices.push(eachPrice);
    //ta bort ----
    const test = 29000;
    arrayPrices.push(test);
    //--------------
    console.log("ALLA PRISER I EN LISTA:", arrayPrices);
  });
  var minPrice = Math.min.apply(Math, arrayPrices);
  return minPrice;
};
// Samma funktion som för min pris -- kan man ha bara en funktion??? LÖS

function getMax(pricehistoryObj){
  const arrayPrices  =[]
  pricehistoryObj.map(el=> {
    const eachPrice = el.price;
    arrayPrices.push(eachPrice);
    //ta bort ----
    const test = 29000;
    arrayPrices.push(test);
    //--------------
  });

  var maxPrice = Math.max.apply(Math, arrayPrices);
  return maxPrice;
};

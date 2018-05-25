import React, { Component } from 'react';
import styles from "./Factbox.scss";

export default class Factbox extends Component {
   render() {
     const currentProduct = this.props.product;
     const minPriceDate = getMin(this.props.pricehistory); //get min price for current product
     const maxPriceDate = getMax(this.props.pricehistory); //-"- max -"-
     // const currentRetailer = checkRetailer(this.props.retailers); //get what retailer user clicked on

      return (
        <div className = "factboxDiv">
          <h2 className= "factsHeadline"> Facts about {this.props.product.name} </h2>
          <h3 className = "facts"> Retailer: {this.props.retailer.name} </h3>
          <h3 className = "facts"> Billigast pris: {this.props.product.minPrice} tillgängligt: {minPriceDate.minDate} </h3>
          <h3 className = "facts"> Dyrast pris: {this.props.product.maxPrice} tillgängligt: {maxPriceDate.maxDate} </h3>
        </div>
      );
   }
}
// get MIN PRICE and WHICH DATE IS MIN PRICE
function getMin(pricehistoryObj){
  var minDate = "";
  var minPrice = 0;
  const priceArray = [];
  pricehistoryObj.map(pricehistory => { //loopar över alla pricehistory objekt
    priceArray.push(pricehistory.price); //lägger in alla priser för produkt i priceArray
  });
  minPrice = Math.min.apply(Math, priceArray);//beräknar minsta priset i pricearray
  pricehistoryObj.forEach(obj => {
    if (obj.price === minPrice){
      minDate = obj.updatedAt
    };
    return {"minPrice": minPrice, "minDate": minDate}
  });
  return {"minPrice": minPrice, "minDate": minDate}
};

//________________________________________________________________________
// get MAX PRICE and WHICH DATE IS MAX
function getMax(pricehistoryObj){
  var maxDate = "";
  var maxPrice = 0;
  const priceArray = [];
  pricehistoryObj.map(pricehistory => { //loopar över alla pricehistory objekt
    priceArray.push(pricehistory.price); //lägger in alla priser för produkt i priceArray
  });
  maxPrice = Math.max.apply(Math, priceArray);//beräknar minsta priset i pricearray
  pricehistoryObj.forEach(obj => {
    if (obj.price === maxPrice){
      maxDate = obj.updatedAt
    };
    return {"maxPrice": maxPrice, "maxDate": maxDate}
  });
  return {"maxPrice": maxPrice, "maxDate": maxDate}
};


//check which retailer user is on in order to get the name for factbox.
/*
function checkRetailer(retailersObj){
  const currentRetailerId = window.location.pathname.slice(31);//the retailer id.
  const retailer = retailersObj.find(function(obj){//find which id user is on.
    return obj.retailerid === currentRetailerId; //return the object user is on.
  });
  return retailer.retailerName; //return name for the retailer user is on.
};*/

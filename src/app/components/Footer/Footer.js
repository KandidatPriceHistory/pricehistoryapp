import React, { Component } from 'react';
import "./Footer.scss"
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
   render() {
      return (
        <div className = "footerDiv">
        <hr></hr>
          <div>
            <p id = "autorsFooter"> © Made by Alva, Farangis och Sofia </p>

            <a href="https://www.instagram.com/pricerunner/">
              <i className= {'icon-instagram'}/>
            </a>
            <a href="https://twitter.com/pricerunnerse?lang=sv">
              <i className= {'icon-twitter'}/>
            </a>
            <a href="https://www.youtube.com/channel/UCNMt4wyU9QT1xUJ51SGfnng">
              <i className= {'icon-youtube'}/>
            </a>
            <a href="https://www.facebook.com/PriceRunner/">
              <i className= {'icon-facebook'}/>
            </a>

          </div>
        </div>

      );
   }
}

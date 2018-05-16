import React, { Component } from 'react';
import style from "./Header.scss";
import WelcomeText from '../WelcomeText/WelcomeText';


export default class HeaderHomePage extends React.Component {
   render() {
      return (
        <div className = "headerHomePageDiv">
            <i className= {`icon-pr_logo_name`} />
            <span className="history">
                history
            </span>
              <WelcomeText />
        </div>
      );
   }
}

import React, { Component } from 'react';
import style from './WelcomeText.scss';

export default class WelcomeText extends React.Component {
  render() {
    return (
      <div className = "WelcomeText">
        <p> Welcome to our pricehistory application ! </p>
      </div>
    );
  }
}

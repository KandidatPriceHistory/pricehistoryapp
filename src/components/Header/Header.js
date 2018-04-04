import React, { Component } from 'react';
import Title from "./Title/Title"
import styles from "./Header.scss"

export default class Header extends React.Component {
   render() {
      return (
        <div className = "headerDiv">
          <div id= "title">
            <Title />
          </div>
          <h4 id="temporaryHeaderComponent"> This is the header component!</h4>
        </div>

      );
   }
}

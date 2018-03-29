import React, { Component } from 'react';
import Title from "./Title/Title"
import styles from "./Header.scss"

export default class Header extends React.Component {
   render() {
      return (
        <div>
          <Title title = {this.props.title} />
          </div>
      );
   }
}

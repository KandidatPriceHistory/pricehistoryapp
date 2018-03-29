import React, { Component } from 'react';

import Title from "./Title/Title"
import title from "./Title/title"

export default class Header extends React.Component {
   render() {
      return (
        <Title title = {this.props.title} />
      );
   }
}

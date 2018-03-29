import React, { Component } from 'react';

export default class Title extends React.Component {

   render() {
     return (
       <h1 className = "titleText"> {this.props.title}</h1>
      );
   }
}


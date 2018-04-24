import React, { Component } from 'react';
import style from "./Header.scss"

export default class Header extends React.Component {
   render() {
      return (
        <div className = "headerDiv">
            <i className= {`icon-pr_logo_name`} />
            <span className="history">
                history
            </span>
        </div>

      );
   }
}

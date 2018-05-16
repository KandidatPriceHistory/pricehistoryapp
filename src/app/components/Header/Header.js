import React, { Component } from 'react';
import style from "./Header.scss"
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
   render() {
      return (
        <div className = "headerDiv">
          <Link to ="/" className="linkTo">
            <i className= {`icon-pr_logo_name`} />
            <span className="history">
                history
            </span>
          </Link>
        </div>

      );
   }
}

import React from 'react';
import { connect } from 'react-redux';
import RetailerItem from './RetailerItem';

export default class RetailerList extends React.Component {
  render() {
    return (
      <div className = "retailerList" >
        { this.props.retailers.map(el => (
          <RetailerItem retailer={el} product={this.props.product}/>
        ))}
      </div>
    )
  }
}

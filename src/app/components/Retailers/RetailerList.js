import React from 'react';
import { connect } from 'react-redux';
import RetailerItem from './RetailerItem';

// TODO: gör till class
/*
export default class RetailerList extends React.Component {
  render() {
    return (
      <RetailerItem
        name={this.props.retailers.name}
        id={this.props.retailers.id}
        picSrc={this.props.retailers.picSrc}
      />
    )
  }
}

/*
const mapStateToProps = state => {
  console.log(state)
  console.log(state.retailers)
  return { retailers: state.retailers };
};

const connectedList = ({ retailers }) => (
  <div className = "retailerList" >
    { retailers.map(el => (
      <RetailerItem
        name={el.name}
        id={el.id}
        picSrc={el.picSrc}
      />
    ))}
  </div>
);

const RetailerList = connect(mapStateToProps)(connectedList);

export default RetailerList;

*/

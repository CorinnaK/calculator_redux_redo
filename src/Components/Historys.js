import React, { Component } from "react";
import { connect } from "react-redux";

class CalculationHistory extends Component {
  // { this.props.updateData.map((data) => (text=data))}

  render() {
    return (
      <div>
        <ul>
          {/* {this.props.updateData.map((data) => (
            <CalculationHistory text={data} />
          ))} */}
          {/* <li> */}
          {this.props.updateData.map((data) => (
            <li>{data} </li>
          ))}
          {/* </li> */}
        </ul>
      </div>
    );
  }
}
export default connect((state) => {
  return { updateData: state };
})(CalculationHistory);

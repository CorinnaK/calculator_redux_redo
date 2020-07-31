import React, { Component } from "react";
import { connect } from "react-redux";

class CalculationHistory extends Component {
  render() {
    return (
      <div>
        <h2>Calculation History</h2>
        <ul>
          {this.props.updateData.map((data) => (
            <li>{data}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default connect((state) => {
  return { updateData: state };
})(CalculationHistory);

import React, { Component } from "react";
import { connect } from "react-redux";

class CalculationHistory extends Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}
export default connect(null)(CalculationHistory);
